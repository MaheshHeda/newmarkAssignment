using Azure.Storage.Blobs;
using Microsoft.AspNetCore.Mvc;
using NewMarkAssignment.Models;
using Newtonsoft.Json;

namespace NewMarkAssignment.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PropertiesController : ControllerBase
    {

        private readonly string _blobUrlWithSas;
        private readonly ILogger<PropertiesController> _logger;

        public PropertiesController(ILogger<PropertiesController> logger, IConfiguration config)
        {
            _logger = logger;
            _blobUrlWithSas = config["AzureBlob:SasUrl"];
        }

        [HttpGet]
        public async Task<IActionResult> GetProperties()
        {
            try
            {
                var blobClient = new BlobClient(new Uri(_blobUrlWithSas));

                using var memoryStream = new MemoryStream();
                await blobClient.DownloadToAsync(memoryStream);

                memoryStream.Position = 0;
                using var reader = new StreamReader(memoryStream);
                string jsonContent = await reader.ReadToEndAsync();

                var properties = JsonConvert.DeserializeObject<List<Property>>(jsonContent);
                return Ok(properties);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Error fetching data", error = ex.Message });
            }
        }
    }
}

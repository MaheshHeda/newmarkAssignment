import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PropertyList from './components/PropertyList';
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PropertyList />
    </QueryClientProvider>
  );
}

export default App;

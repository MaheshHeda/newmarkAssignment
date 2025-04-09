import { Property } from "../interfaces";

export const mockProperties: Property[] = [
    {
        "propertyId": "P101",
        "propertyName": "The Grand Plaza",
        "features": [
            "24/7 Security",
            "Fitness Center",
            "Swimming Pool",
            "Rooftop Garden"
        ],
        "highlights": [
            "Located in the heart of downtown",
            "Close proximity to business district",
            "Energy-efficient building with LEED certification"
        ],
        "transportation": [
            {
                "type": "Subway",
                "line": "Green Line",
                "distance": "0.5 miles"
            },
            {
                "type": "Bus",
                "line": "Route 15",
                "distance": "0.2 miles"
            }
        ],
        "spaces": [
            {
                "spaceId": "S101",
                "spaceName": "Suite 101",
                "rentRoll": [
                    {
                        "month": "Jan",
                        "rent": 2000
                    },
                    {
                        "month": "Feb",
                        "rent": 2000
                    },
                    {
                        "month": "Mar",
                        "rent": 2100
                    }
                ]
            },
            {
                "spaceId": "S102",
                "spaceName": "Suite 102",
                "rentRoll": [
                    {
                        "month": "Jan",
                        "rent": 1800
                    },
                    {
                        "month": "Feb",
                        "rent": 1850
                    },
                    {
                        "month": "Mar",
                        "rent": 1850
                    }
                ]
            }
        ]
    },
    {
        "propertyId": "P102",
        "propertyName": "Ocean View Tower",
        "features": [
            "Underground Parking",
            "Gym Access",
            "Community Lounge",
            "Pet-Friendly"
        ],
        "highlights": [
            "Panoramic ocean views",
            "Walking distance to waterfront park",
            "High-speed fiber internet available"
        ],
        "transportation": [
            {
                "type": "Train",
                "line": "Blue Line",
                "distance": "1 mile"
            },
            {
                "type": "Bike Share",
                "line": "null",
                "distance": "0.1 miles"
            }
        ],
        "spaces": [
            {
                "spaceId": "S201",
                "spaceName": "Penthouse A",
                "rentRoll": [
                    {
                        "month": "Jan",
                        "rent": 5000
                    },
                    {
                        "month": "Feb",
                        "rent": 5200
                    },
                    {
                        "month": "Mar",
                        "rent": 5300
                    }
                ]
            },
            {
                "spaceId": "S202",
                "spaceName": "Office Suite B",
                "rentRoll": [
                    {
                        "month": "Jan",
                        "rent": 2500
                    },
                    {
                        "month": "Feb",
                        "rent": 2550
                    },
                    {
                        "month": "Mar",
                        "rent": 2600
                    }
                ]
            }
        ]
    }
]
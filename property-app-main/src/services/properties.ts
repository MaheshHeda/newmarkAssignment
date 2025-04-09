import { Property } from "../interfaces";

export async function fetchProperties(): Promise<Property[]> {
    const response = await fetch('https://localhost:7123/properties');
    if (!response.ok) {
        throw new Error('Failed to fetch properties');
    }
    return response.json();
}
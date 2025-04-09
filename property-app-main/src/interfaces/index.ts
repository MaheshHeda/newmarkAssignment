export interface RentRoll {
    month: string;
    rent: number;
}

export interface Space {
    spaceId: string;
    spaceName: string;
    rentRoll: RentRoll[];
}

export interface Transportation {
    type: string;
    line?: string;
    station?: string;
    distance: string;
}

export interface Property {
    propertyId: string;
    propertyName: string;
    features: string[];
    highlights: string[];
    transportation: Transportation[];
    spaces: Space[];
}
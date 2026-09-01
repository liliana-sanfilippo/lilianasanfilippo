export interface SimplePart {
    part_name: string,
    registry_code: string,
    registry_url: string
    description: string,
    length: number,
    // decides category / symbol
    type: string,
    category: string,
    image?: string,
    image_alt?: string,
    source_name: string,
    source_url: string
}



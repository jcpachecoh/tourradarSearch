export class Tour {
    age_from: number;
    age_to: number;
    country: string;
    currency: string;
    description: string;
    destinations: string[];
    id: number;
    length: number;
    map_image: string;
    price: number;
    rating: number;
    saving: number;
    tour_image: string;
    tour_name: string;
    tour_operator: string;

    constructor(age_from: number,
                age_to: number,
                country: string,
                currency: string,
                description: string,
                destinations: string[],
                id: number,
                length: number,
                map_image: string,
                price: number,
                rating: number,
                saving: number,
                tour_image: string,
                tour_name: string,
                tour_operato: string) {
        this.age_from = age_from;
        this.age_to = age_to;
        this.country = country;
        this.currency = currency;
        this.description = description;
        this.destinations = destinations;
        this.id = id;
        this.length = length;
        this.map_image = map_image;
        this.price = price;
        this.rating = rating;
        this.saving = saving;
    }
}
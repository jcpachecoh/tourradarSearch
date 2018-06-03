import { Tour } from '../models/tour';
export function formatPricing(value: number) {
    return value.toFixed(2).replace(/./g, (c, i, a) => {
        return i && c !== '.' && ((a.length - i) % 3 === 0) ? ',' + c : c;
    });
}

export function sortByLowestPrice(tours: Tour[]): Tour[] {
    let toursArray = tours.slice();

    return toursArray.sort((a, b) => {
        return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0);
    });
}

export function sortByHighestPrice(tours: Tour[]): Tour[] {
    let toursArray = tours.slice();

    return toursArray.sort((a, b) => {
        return (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0);
    });
}

export function sortByLongestTour(tours: Tour[]): Tour[] {
    let toursArray = tours.slice();

    return toursArray.sort((a, b) => {
        return (a.length < b.length) ? 1 : ((b.length < a.length) ? -1 : 0);
    });
}

export function sortByShortestTour(tours: Tour[]): Tour[] {
    let toursArray = tours.slice();

    return toursArray.sort((a, b) => {
        return (a.length > b.length) ? 1 : ((b.length > a.length) ? -1 : 0);
    });
}
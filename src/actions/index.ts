import { Action } from './action';
import { Tour } from '../models/tour';

export const SET_TOURS_DATA = 'SetToursData';
export type SET_TOURS_DATA = typeof SET_TOURS_DATA;
export const SORT_DATA_BY = 'SortDataBy';
export type SORT_DATA_BY = typeof SORT_DATA_BY;

export class SetToursData implements Action {
    type: SET_TOURS_DATA;
    payload: Tour[];
}

export function setToursData(tours: Tour[]): SetToursData {
    return {
        type: SET_TOURS_DATA,
        payload: tours
    };
}

export class SortDataBy implements Action {
    type: SORT_DATA_BY;
    payload: string;
}

export function sortDataBy(value: string): SortDataBy {
    return {
        type: SORT_DATA_BY,
        payload: value
    };
}

export type TourActions =
    SetToursData |
    SortDataBy;

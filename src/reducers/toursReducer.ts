import { TourActions, SET_TOURS_DATA, SORT_DATA_BY } from '../actions/index';
import { sortByLowestPrice, sortByHighestPrice, sortByLongestTour, sortByShortestTour } from '../scripts/index';
import { Tour } from '../models/tour';
const newObject = (state: any, newData: any) => Object.assign({}, state, newData);

export const defaultTours = {
    tours: [],
    sortCriteria: '0'
};

export const toursReducer = (state = defaultTours, action: TourActions) => {
    switch (action.type) {
        case SET_TOURS_DATA:
            return newObject(
                state,
                {
                    tours: action.payload,
                }
            );

        case SORT_DATA_BY:
            let sortCriteriaValue = action.payload,
                tours = state.tours,
                toursSorted: Tour[] = [];

            if (sortCriteriaValue === '0') {
                toursSorted = sortByLowestPrice(tours);
            } else if (sortCriteriaValue === '1') {
                toursSorted = sortByHighestPrice(tours);
            } else if (sortCriteriaValue === '2') {
                toursSorted = sortByLongestTour(tours);
            } else if (sortCriteriaValue === '3') {
                toursSorted = sortByShortestTour(tours);
            } else {
                toursSorted = tours;
            }

            return newObject(
                state,
                {
                    sortCriteria: action.payload,
                    tours: toursSorted
                }
            );
        default:
            return state;
    }
};
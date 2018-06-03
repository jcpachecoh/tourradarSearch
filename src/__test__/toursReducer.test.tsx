jest.unmock('redux-mock-store');
jest.unmock('redux');
import { createStore } from 'redux';
import { toursReducer, defaultTours } from '../reducers/toursReducer';
import { setToursData, sortDataBy } from '../actions/index';
import { Tour } from '../models/tour';

const configureMockStore = require('redux-mock-store');

describe('Test User reducer', () => {
    const mockStore = configureMockStore();
    let defaultToursMock: any,
        store: any,
        storeActions: any,
        action: any,
        tours: Tour[],
        sortCriteria: string;

    beforeEach(() => {
        sortCriteria = '1';
        tours = [{
            age_from: 21,
            age_to: 73,
            country: 'Indonesia',
            currency: 'AUD',
            description: '13 days Home Ing experience',
            destinations: [
                'Liushun',
                'Uppsala',
                'Zagórnik',
                'Salon-de-Provence',
                'Washington',
                'Prawdzinski',
                'Maredakalada',
                'Breia',
                'Baisha',
                'Songlong'],
            id: 1,
            length: 13,
            map_image: 'http://dummyimage.com/928x400.png/cc0000/ffffff',
            price: 5008,
            rating: 3,
            saving: 92,
            tour_image: 'http://dummyimage.com/928x680.png/ff4444/ffffff',
            tour_name: 'Home Ing',
            tour_operator: 'Cormier-Pfeffer',
        }];
        store = createStore(toursReducer);
        defaultToursMock = {
            tours: [],
            sortCriteria: '0'
        };
        storeActions = mockStore(defaultToursMock);
    });
    describe('Test general actions reducer transactions', () => {
        it('Return initial state', () => {
            expect(defaultToursMock).toEqual(defaultTours);
        });

        it('should call setToursData function', () => {
            storeActions.dispatch(setToursData(tours));
            action = storeActions.getActions();
            expect(action[0].type).toBe('SetToursData');
        });

        it('should change payload calling setToursData function', () => {
            storeActions.dispatch(setToursData(tours));
            action = storeActions.getActions();
            expect(action[0].payload).toBe(tours);
        });

        it('should change store tours with setToursData', () => {
            store.dispatch(setToursData(tours));
            store = store.getState();
            expect(store.tours).toBe(tours);
        });

        it('should call sortDataBy function', () => {
            storeActions.dispatch(sortDataBy(sortCriteria));
            action = storeActions.getActions();
            expect(action[0].type).toBe('SortDataBy');
        });

        it('should change payload calling sortDataBy function', () => {
            storeActions.dispatch(sortDataBy(sortCriteria));
            action = storeActions.getActions();
            expect(action[0].payload).toBe(sortCriteria);
        });

        it('should change store tours with sortDataBy', () => {
            store.dispatch(setToursData(tours));
            store.dispatch(sortDataBy(sortCriteria));
            store = store.getState();
            expect(store.tours).toEqual(tours);
            expect(store.sortCriteria).toBe(sortCriteria);
        });
    });
});
import * as React from 'react';
import { MainGrid } from '../components/MainGrid';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store-index';

describe('--------Create Dashboard tests-------------', () => {
    let wrapper: any, tours = [{
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
    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <MainGrid
                    setToursData={() => { }}
                    tours={tours}
                />
            </Provider>
        );
    });

    it('+++ render the DUMB component', () => {
        expect(wrapper.length).toEqual(1);
    });
});

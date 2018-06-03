import * as React from 'react';
import { MainGrid } from '../components/MainGrid';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store-index';
import { Destinations } from '../components/Destinations';
import { ImageLoader } from '../components/ImageLoader';
import { Pricing } from '../components/Pricing';
import { Rating } from 'semantic-ui-react';
import { TourContent } from '../components/TourContent';
import { TourHeader } from '../components/TourHeader';
import { TourDays } from '../components/TourDays';

export const tours = [{
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
describe('--------Create Dashboard tests-------------', () => {
    let wrapper: any;
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

describe('--------Destionations tests-------------', () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <Destinations
                    destinations={tours[0].destinations}
                />
            </Provider>
        );
    });
    it('+++ render the DUMB component', () => {
        expect(wrapper.length).toEqual(1);
    });
});

describe('--------Image Loader tests-------------', () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <ImageLoader
                    tourImage={tours[0].tour_image}
                    tourName={tours[0].tour_name}
                    mapImage={tours[0].map_image}
                />
            </Provider>
        );
    });
    it('+++ render the DUMB component', () => {
        expect(wrapper.length).toEqual(1);
    });
});

describe('--------Pricing tests-------------', () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <Pricing
                    currency={tours[0].currency}
                    price={tours[0].price}
                    saving={tours[0].saving}
                />
            </Provider>
        );
    });
    it('+++ render the DUMB component', () => {
        expect(wrapper.length).toEqual(1);
    });
});

describe('--------Rating tests-------------', () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <Rating
                    rating={tours[0].rating}
                />
            </Provider>
        );
    });
    it('+++ render the DUMB component', () => {
        expect(wrapper.length).toEqual(1);
    });
});

describe('--------Tour content tests-------------', () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <TourContent
                    destinations={tours[0].destinations}
                    age_from={tours[0].age_from}
                    age_to={tours[0].age_to}
                    country={tours[0].country}
                    operator={tours[0].tour_operator}
                />
            </Provider>
        );
    });
    it('+++ render the DUMB component', () => {
        expect(wrapper.length).toEqual(1);
    });
});

describe('--------Tour header tests-------------', () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <TourHeader
                    description={tours[0].description}
                    country={tours[0].country}
                />
            </Provider>
        );
    });
    it('+++ render the DUMB component', () => {
        expect(wrapper.length).toEqual(1);
    });
});

describe('--------Tour header tests-------------', () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <TourDays
                    tourDays={tours[0].length}
                />
            </Provider>
        );
    });
    it('+++ render the DUMB component', () => {
        expect(wrapper.length).toEqual(1);
    });
});
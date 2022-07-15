import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
//import { mockData } from '../mock-data';
//import { extractLocations } from '../api';

describe('<App /> component', () => {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App />);
    });

    test('render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
    });

    test('CitySearch component included', () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });
    test('NumberOfEvents component included', () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    })
});
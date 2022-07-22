import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import App from '../App';
import { mount } from 'enzyme';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    let AppWrapper;

    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('the city page was open', () => {
            //AppWrapper = mount(< App />);
        });

        when("the user didn't select any event", () => {
            AppWrapper = mount(<App />);
        });

        then('the user should see a collapsed event.', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event.details')).toHaveLength(0);
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('the use found an event', async () => {
            AppWrapper = await mount(< App />);
        });

        when('the user clicks on button of specified event', () => {
            AppWrapper.update();
            AppWrapper.find('.event .btn-toggle-details').at(0).simulate('click')

        });

        then('the user should see the expanded details of the event', () => {
            expect(AppWrapper.find('.event .event-details')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('the event details are expanded', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update()
            AppWrapper.find('.event .btn-toggle-details').at(0).simulate('click');

        });

        when('the user closes the details', () => {
            AppWrapper.update();
            AppWrapper.find('.event .btn-toggle-details').at(0).simulate('click');
        });

        then('the user can collapse to hide event details', () => {
            expect(AppWrapper.find('.event .event-details')).toHaveLength(0);
        });
    });
})
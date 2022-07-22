import { loadFeature, defineFeature } from 'jest-cucumber';
import React from "react";
import { mount } from "enzyme";
import App from "../App";
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/specifyTheNumberOfEvents.feature');
let AppWrapper;

defineFeature(feature, test => {
    test('Default number is 12 when user has not specified', ({ given, when, then }) => {
        given('the user sees a list of events', () => {
        });

        when('the user hasn’t specified a number of events', () => {
            AppWrapper = mount(<App />);
        });

        then('the user should see a list 12 events by default', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });
    });

    test('User can change the number of Events', ({ given, when, then }) => {
        given('the user sees a list of events', () => {
            AppWrapper = mount(<App />);
        });

        when('the user has specified a number of events that he wants to see', () => {
            AppWrapper.update();
            AppWrapper.find('.number-of-events').simulate('change', { target: { value: 2 } });
        });

        then('the user should see a specified number of events', () => {
            expect(AppWrapper.find(".event")).toHaveLength(2);
        });
    });
});
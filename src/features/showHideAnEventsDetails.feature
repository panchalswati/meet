Feature: show/hide an event details

Scenario: An event element is collapsed by default
Given the city page was open
When the user didn't select any event
Then the user should see a collapsed event.

Scenario: User can expand an event to see its details
Given the use found an event
When the user clicks on button of specified event
Then the user should see the expanded details of the event

Scenario: User can collapse an event to hide its details
Given the event details are expanded
When the user closes the details
Then the user can collapse to hide event details

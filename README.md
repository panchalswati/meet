# meet
Building a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

FEATURE 1: SHOW/HIDE AN EVENT'S DETAILS

Scenario 1: An event element is collapsed by default
Given a user is on the main page
When nothing to select
Then the event details will be collapsed

Scenario 2: User can expand an event to see its details
Given a user is on event list page
When user clicks on particular event
Then the details of an event will be expanded

Scenario 3: User can collapse an event to hide its details
Given a user is on event list page
When user clicks on event
Then the event will hide all its details

FEATURE 2: SPECIFY NUMBER OF EVENTS

Scenario 1: When user hasn’t specified a number, 32 is the default number
Given the user has not specified a number
When the user visits the page
Then the default number 32 events will be displayed

Scenario 2: User can change the number of events they want to see
Given user has chosen an events count preference
When the user visits the main page
Then the specified number of events will be displayed

FEATURE 3: USE THE APP WHEN OFFLINE

Scenario 1: Show cached data when there’s no internet connection
Given the user has no internet connecton
When to access the site
Then the data will is accessed by cached data stored

Scenario 2: Show error when user changes the settings (city, time range)
Given the user is offline
When user clicks to change the settings
Then an error will be displayed

FEATURE 4: DATA VISUALIZATION

Scenario 1: Show a chart with the number of upcoming events in each city
Given the user was on main page
When user clicks to see number of upcoming events
Then a chart will be displayed showing number of events

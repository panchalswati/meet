Feature: Specify number of events
  Scenario: Default number is 12 when user has not specified
    Given the user sees a list of events
    When the user hasn’t specified a number of events
    Then the user should see a list 12 events by default
  Scenario: User can change the number of Events
    Given the user sees a list of events
    When the user has specified a number of events that he wants to see
    Then the user should see a specified number of events
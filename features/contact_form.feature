Feature: Contact form

  Scenario: Submit contact form using JSON test data
    Given I open the contact form
    When I fill the contact form using "user2" test data
    And I submit the contact form
    Then the form should be submitted successfully
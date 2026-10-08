Feature: Contact Us Form

  Background:
    Given I navigate to the WebDriver University Contact Us page

  Scenario: Submit Contact Us form successfully
    When I enter the following contact information:
      | firstName | lastName | email              | comment                     |
      | Martin    | Joseph   | martin@example.com | Playwright BDD test message |
    And I click the Submit button
    Then I should see a successful submission message  
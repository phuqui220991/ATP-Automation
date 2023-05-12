Feature: Login Functionality
  As a user
  I want to be able to login to the application
  So that I can access my account and perform actions

  Scenario: Successful Login
    Given I am on the login page
    When I enter valid credentials
    And I click the login button
    Then I should be redirected to the home page

  Scenario: Failed Login
    Given I am on the login page
    When I enter invalid credentials
    And I click the login button
    Then I should see an error message
    And I should not be redirected to the home page

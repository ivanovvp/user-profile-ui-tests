Feature: Vacancy Page - Department Manager

  Background:
    When Go to Login page
    And Enter 'auto-test-manager@onyx.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @smoke @vacancymanager @test @auto-test-manager@onyx.com
  Scenario: Vacancy Page Appeared
    When Go to Vacancy page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    Then 'Menu' Block is Appeared
    Then 'Vacancy index' Block is Appeared
    And Wait for 1 seconds
    And Click '111' link in Vacancy Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
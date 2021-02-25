Feature: New Employee Onboarding Page - Recruiter

  Background:
    When Go to Login page
    And Enter 'auto-test@onyx.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @smoke @onboarding @test @auto-test@onyx.com
  Scenario: New Employee Onboarding Page Appeared
    When Go to New Employee Onboarding page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    Then 'Menu' Block is Appeared
    Then Table Header 'Request' Field is Appeared in New Employee Onboarding Page
    Then Table Header 'Created' Field is Appeared in New Employee Onboarding Page
    Then Table Header 'By' Field is Appeared in New Employee Onboarding Page
    Then Table Header 'Photo' Field is Appeared in New Employee Onboarding Page
    Then Table Header 'Name' Field is Appeared in New Employee Onboarding Page
    Then Table Header 'Surname' Field is Appeared in New Employee Onboarding Page
    Then Table Header 'Applying position' Field is Appeared in New Employee Onboarding Page
    Then Table Header 'Location' Field is Appeared in New Employee Onboarding Page
    Then Table Header 'Phone' Field is Appeared in New Employee Onboarding Page
    Then Table Header 'Request Status' Field is Appeared in New Employee Onboarding Page
    Then Table Header 'Candidate Status' Field is Appeared in New Employee Onboarding Page
    And Check 'Status Vacancy' in New Employee Onboarding Page
    And Click 'Done' Button in New Employee Onboarding Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
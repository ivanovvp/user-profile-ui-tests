Feature: Interview Denyed Page - Recruiter

  Background: Login
    When Go to Login page
    And Enter 'auto-test@onyx.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @test @interviewDenyed @smoke @auto-test@onyx.com
  Scenario: Interview Page
    When Go to Interview Denyed page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    And Click '1 CheckBox' in Interview Denyed Page
    And Click '2 CheckBox' in Interview Denyed Page
    And Click '3 CheckBox' in Interview Denyed Page
    And Click '4 CheckBox' in Interview Denyed Page
    And Click '5 CheckBox' in Interview Denyed Page
    And Click '6 CheckBox' in Interview Denyed Page
    And Click '7 CheckBox' in Interview Denyed Page
    And Click '8 CheckBox' in Interview Denyed Page
    And Click '9 CheckBox' in Interview Denyed Page
    And Click '10 CheckBox' in Interview Denyed Page
    And Click '11 CheckBox' in Interview Denyed Page
    And Click '12 CheckBox' in Interview Denyed Page
    And Enter 'Погода хорошая' Text in Interview Denyed Page
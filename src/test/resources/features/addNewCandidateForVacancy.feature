Feature: Add New Candidate For Vacancy Page - Recruiter

  Background:
    When Go to Login page
    And Enter 'auto-test@onyx.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @smoke @addNewCandidateForVacancy @test @auto-test-manager@onyx.com
  Scenario: Add New Candidate For Vacancy Page
    When Go to Add New Candidate for Vacancy page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    Then Table Header 'Request' Block is Appeared in Add New Candidate For Vacancy Page
    Then Table Header 'Created' Block is Appeared in Add New Candidate For Vacancy Page
    Then Table Header 'By' Block is Appeared in Add New Candidate For Vacancy Page
    And Click 'CVs received from vacancy' Button in Add New Candidate For Vacancy Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
    And Click 'Back' Button in Page Recruiter Candidate
    And Click 'CVs received from hunting' Button in Add New Candidate For Vacancy Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
    And Click 'Back' Button in Page Recruiter Candidate
    And Click 'CVs received from recommendation' Button in Add New Candidate For Vacancy Page
    And Wait for 1 seconds
    And Check Status Code and assert
    Then Redirect to the Expected Page Worked
    And Click 'Back' Button in Page Recruiter Candidate
    And Click 'Done' Button in Add New Candidate For Vacancy Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
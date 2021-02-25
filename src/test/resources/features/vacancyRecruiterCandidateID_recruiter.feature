Feature: Vacancy Recruiter Candidate ID Page - Recruiter

  Background:
    When Go to Login page
    And Enter 'auto-test@onyx.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @smoke @vacancyrecruitercandidate @test @auto-test@onyx.com
  Scenario: Vacancy Recruiter Candidate ID Page Appeared
    When Go to Vacancy Recruiter Candidate ID page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    Then 'Menu' Block is Appeared
    And Click 'View Request Info' Button in Page Recruiter Candidate
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
    And Click 'Back' Button in Page Recruiter Candidate
    And Click 'View candidate History' Button in Page Recruiter Candidate
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
    When Go to Vacancy Recruiter Candidate ID page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    And Click 'Check Candidate Interest' Button in Page Recruiter Candidate
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
    When Go to Vacancy Recruiter Candidate ID page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    And Click 'Page Down' Button in Page Recruiter Candidate
    And Wait for 1 seconds
    And Click 'Check onboarding' Button in Page Recruiter Candidate
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
    When Go to Vacancy Recruiter Candidate ID page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    And Click 'Page Down' Button in Page Recruiter Candidate
    And Wait for 1 seconds
    And Click 'Set interview time' Button in Page Recruiter Candidate
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
    When Go to Vacancy Recruiter Candidate ID page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    Then Table Header 'Request' Block is Appeared in VRCID Page
    Then Table Header 'Created' Block is Appeared in VRCID Page
    Then Table Header 'By' Block is Appeared in VRCID Page
    Then Checking buttons for status 'Central Status Vacancy'
    Then Checking buttons for status 'CV Received'
    Then Checking buttons for status 'Candidate is interested in vacancy'
    Then Checking buttons for status 'Closed by recrutier'
    Then Checking buttons for status 'Approved for the interview'
    Then Checking buttons for status 'Closed by department manager for interview'
    Then Checking buttons for status 'Interview timing approval'
    Then Checking buttons for status 'Interview'
    Then Checking buttons for status 'Closed by department manager for employment'
    Then Checking buttons for status 'Contract Concluding'
    Then Checking buttons for status 'Closed by department manager for employment'
    Then Checking buttons for status 'Start date of new employee is set'
    Then Checking buttons for status 'Closed. Candidate declined proposition'
    And Click 'Add new Candidate for Vacancy' Button in Page Recruiter Candidate
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
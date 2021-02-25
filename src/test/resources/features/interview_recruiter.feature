Feature: Interview Page - Recruiter

  Background: Login
    When Go to Login page
    And Enter 'auto-test@onyx.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @test @interview @smoke @auto-test@onyx.com
  Scenario: Interview Page
    When Go to Interview page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    Then Is 'Status Candidate' Block is Appeared in Interview Page
    Then Is 'Candidate did not Accepted our offer' Block is Appeared in Interview Page
    Then Is 'Back to candidates list' Block is Appeared in Interview Page
    Then Is 'Name' Block is Appeared in Interview Page
    Then Is 'Surname' Block is Appeared in Interview Page
    Then Is 'Phone' Block is Appeared in Interview Page
    Then Is 'Candidate Status' Block is Appeared in Interview Page
    Then Is 'Interview' Block is Appeared in Interview Page
    Then Is 'Request' Block is Appeared in Interview Page
    Then Is 'Created' Block is Appeared in Interview Page
    Then Is 'By' Block is Appeared in Interview Page
    And Click'Back to candidates list' Button in Interview Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
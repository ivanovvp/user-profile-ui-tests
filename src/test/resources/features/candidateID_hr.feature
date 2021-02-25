Feature: Candidate ID Page - HR

  Background:
    When Go to Login page
    And Enter 'auto-test-hr@onyx.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @smoke @candidateid @test @auto-test-hr@onyx.com
  Scenario: CandidateID Page Appeared
    When Go to Candidate ID page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    Then 'Menu' Block is Appeared
    Then 'Candidate' Block is Appeared
    Then Is 'Edit Button' Button is Appeared in Candidate ID Page
    Then Is 'back to list' Button is Appeared in Candidate ID Page
    Then Is 'Candidate Status' Button is Appeared in Candidate ID Page
    Then Click 'edit' Button in Candidate ID Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
    Then Click 'Back' Button in Candidate ID Page
    Then Click 'back to list' Button in Candidate ID Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
    And Wait for 1 seconds
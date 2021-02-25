Feature: Approved List - Department Manager

  Background:
    When Go to Login page
    And Enter 'auto-test-manager@onyx.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @smoke @approvedlist @test @auto-test-manager@onyx.com
  Scenario: Approved List Candidate Page
    When Go to Approved List Candidate Page page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    Then 'Menu' Block is Appeared
    Then Is 'All Candidate' Element Appeared in Approved List Candidate Page
    Then Is 'Approved' Element Appeared in Approved List Candidate Page
    Then Is 'Give feedback on the candidate' Element Appeared in Approved List Candidate Page
#   Then 'Denied' Field is Appeared in Approved List Candidate Page
    And Click 'Approved' Button in Approved List Candidate Page
    And Click 'Give FeedBack On The Candidate' Button in Approved List Candidate Page
    And Check Status Code and assert
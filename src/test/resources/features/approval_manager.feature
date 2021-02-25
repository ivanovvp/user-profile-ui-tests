Feature: Approval Page - Department Manager

  Background:
    When Go to Login page
    And Enter 'auto-test-manager@onyx.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @smoke @approval @test @auto-test-manager@onyx.com
  Scenario: Approval Page
    When Go to Approval page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    Then Field 'Photo' is Appeared in Approval Page
    Then Field 'Name' is Appeared in Approval Page
    Then Field 'Surname' is Appeared in Approval Page
    Then Field 'Applying position' is Appeared in Approval Page
    Then Field 'Location' is Appeared in Approval Page
    Then Field 'Request Status' is Appeared in Approval Page
    Then Field 'Candidate Status' is Appeared in Approval Page
    And Button 'Approve candidate for interview' is Appeared in Approval Page
    And Button 'Deny candidate for interview' is Appeared in Approval Page
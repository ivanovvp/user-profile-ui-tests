Feature: Workinghours Info Page - Recruiter

  Background:
    When Go to Login page
    And Enter 'auto-test' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @smoke @workingHoursInfo @test @auto-test-limon4-zorgan@nexteum.com
  Scenario: Check Workinghours Info Page
    When Go to Workinghours Info page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    Then 'Menu' Block is Appeared
    Then Check Table Name In Working Hours Info Page
    Then Check Table Name Total In Working Hours Info Page
    Then Check Need Hours This Month In Working Hours Info Page
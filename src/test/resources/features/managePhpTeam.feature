Feature: Manage Php Team Page - Account Manager

  Background:
    When Go to Login page
    And Enter 'auto-test-limon4-zorgan@nexteum.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @smoke @managePhpTeam @test @auto-test-limon4-zorgan@nexteum.com
  Scenario: Check Manage Php Team Page Page
    When Go to Manage PHP Team page
    And Wait for 1 seconds
    Then 'Menu' Block is Appeared
    Then Check Table Name In Manage PHP Team Page
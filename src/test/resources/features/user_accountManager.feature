Feature: User Page - Account Manager

  Background:
    When Go to Login page
    And Enter 'auto-test-limon4-zorgan@nexteum.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @smoke @user @test @auto-test-limon4-zorgan@nexteum.com
  Scenario: Check User Page
    When Go to User page
    And Wait for 1 seconds
    And Check Status Code and assert
    Then THead is Available in User Page
    Then 'Create new' Button is Available in User Page
    Then 'Users' Button is Available in User Page
    Then 'New' Button is Available in User Page
    Then 'Terminated' Button is Available in User Page
    And Click on 'Users' Button in User Page
    And Click on 'New' Button in User Page
    And Click on 'Terminated' Button in User Page
    And Click on 'All' Button in User Page
    And Click on 'Create New' Button in User Page
    And Wait for 1 seconds
    And Check Status Code and assert
Feature: User ID Page - Department Manager

  Background:
    When Go to Login page
    And Enter 'auto-test-manager@onyx.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @smoke @userid @test @auto-test-manager@onyx.com
  Scenario: Check User ID Page
    When Go to User ID page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    Then Is 'Menu' Block is Appeared in User ID Page
    Then Is 'User' Block is Appeared in User ID Page
    Then Is 'Full Name' Block is Appeared in User ID Page
    Then Is 'Phone' Block is Appeared in User ID Page
    Then Is 'Email' Block is Appeared in User ID Page
    Then Is 'Logout' Button is Appeared in User ID Page
    Then Is 'Change password' Button is Appeared in User ID Page
    And Click on 'Change Password' Button in User Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
    Then Click 'Back' Button
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
    And Click on 'Logout' Button in User Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
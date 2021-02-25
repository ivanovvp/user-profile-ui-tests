Feature: SDT Email Assignee index Page

  Background:
    When Go to Login page
    And Enter 'auto-test-limon4-zorgan' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @smoke @SDTEmailAssigneeSteps @test @auto-test-limon4-zorgan@nexteum.com
  Scenario: Check User ID Page
    When Go to User ID page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    And Click on 'edit' Button in User Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
    And Click on 'Update' Button in User Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
    When Go to SDT Email Assignee index page
    And Check Status Code and assert
    And Wait for 1 seconds
    And Compare ID and Email
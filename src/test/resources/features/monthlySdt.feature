Feature: MonthlySdt Page - Recruiter

  Background:
    When Go to Login page
    And Enter 'auto-test@onyx.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @smoke @monthlysdt @test @auto-test@onyx.com
  Scenario: MonthlySdt Page Appeared
    When Go to MonthlySdt page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    Then 'Menu' Block is Appeared
    Then 'MonthlySdt index' Block is Appeared
    Then Is 'Count' Block is Appeared in MonthlySdt Page
    Then Is 'Email' Block is Appeared in MonthlySdt Page
    Then Is 'Name' Block is Appeared in MonthlySdt Page
    Then Is 'Create_date' Block is Appeared in MonthlySdt Page
    Then Is 'actions' Block is Appeared in MonthlySdt Page
    And Click 'show' Button in MonthlySdt Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
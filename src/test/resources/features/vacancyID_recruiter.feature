Feature: Vacancy ID Page - Recruiter

  Background:
    When Go to Login page
    And Enter 'auto-test@onyx.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @smoke @vacancyid @test @auto-test@onyx.com
  Scenario: Vacancy ID Page Appeared
    When Go to Vacancy ID page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    Then 'Menu' Block is Appeared
    Then 'Vacancy' Block is Appeared
    Then Is 'Request#' Block is Appeared in Vacancy ID Page
    Then Is 'Office' Block is Appeared in Vacancy ID Page
    Then Is 'Department' Block is Appeared in Vacancy ID Page
    Then Is 'Team' Block is Appeared in Vacancy ID Page
    Then Is 'Position' Block is Appeared in Vacancy ID Page
    Then Is 'Salary' Block is Appeared in Vacancy ID Page
    Then Is 'Test' Block is Appeared in Vacancy ID Page
    Then Is 'English' Block is Appeared in Vacancy ID Page
    Then Is 'Amount' Block is Appeared in Vacancy ID Page
    Then Is 'Bonus' Block is Appeared in Vacancy ID Page
    Then Is 'Responsibilities' Block is Appeared in Vacancy ID Page
    Then Is 'Requirements' Block is Appeared in Vacancy ID Page
    Then Is 'Plus' Block is Appeared in Vacancy ID Page
    Then Is 'Created' Block is Appeared in Vacancy ID Page
    Then Is 'By' Block is Appeared in Vacancy ID Page
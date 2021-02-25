Feature: Vacancy-New Page - Department Manager

  Background:
    When Go to Login page
    And Enter 'auto-test-manager@onyx.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @smoke @vacancynew @test @auto-test-manager@onyx.com
  Scenario: Vacancy New Page Appeared
    When Go to Vacancy New page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    Then 'Menu' Block is Appeared
    Then 'Create new Vacancy' Block is Appeared
    And Select Office 'Lustdorfska road (Odessa, Ukraine)' In Office Field in Vacancy New Page
    And Select Department 'Development team' In Department Field in Vacancy New Page
    And Select Team 'Display Team' In Team Field in Vacancy New Page
    And Enter Position 'QA' In Position Text Field in Vacancy New Page
    And Enter Salary '2500' In Salary Text Field in Vacancy New Page
    And Select Test 'Yes' In Test Field in Vacancy New Page
    And Select English 'Upper-Intermediate' In English Field in Vacancy New Page
    And Enter Amount '2' In Amount Text Field in Vacancy New Page
    And Enter Bonus '100' In Bonus Text Field in Vacancy New Page
    And Enter Responsibilities 'test' In Responsibilities Text Field in Vacancy New Page
    And Enter Requirements 'test)' In Requirements Text Field in Vacancy New Page
    And Enter Plus 'test' In Plus Text Field in Vacancy New Page
    And Enter Reason 'test' In Reason Text Field in Vacancy New Page
    And Click 'Back to List' Button in Vacancy New Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
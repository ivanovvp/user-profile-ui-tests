Feature: Create New Account Page

  @all @smoke @createaccount @test @automation@onyx.com
  Scenario: create account test
    When Go to Login page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    And Click 'Create an account' Button in Create Account Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
    Then 'Email account creation' Block is Appeared
    And Enter 'dodik@gmail.com' Text in Email Field in Create Account Page
    And Click 'Send' Button in Create Account Page
    And A Warning Has Appeared
    And Enter 'automation@onyx.com' Text in Email Field in Create Account Page
    And Click 'Send' Button in Create Account Page
    And A Warning Has Appeared
    And Click 'Back' Button in Create Account Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
Feature: Login Page

  @all @smoke @login @test @auto-test@onyx.com
  Scenario: Simple manual user login
    When Go to Login page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    And Enter 'notlogin' Text in Email Field
    And Enter 'notpassword' Text in Password Field
    And Click on 'Sign In' Button
    And A Warning About The Wrong Name And Password Appeared
    And Enter 'auto-test@onyx.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
    Then 'Menu' Block is Appeared
    And Wait for 1 seconds
    And Click on 'Nexteum' Button
    And Check Status Code and assert
    And Wait for 1 seconds
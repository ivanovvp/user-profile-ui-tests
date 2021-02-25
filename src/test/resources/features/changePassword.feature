Feature: Change Password Page

  @all @smoke @changepassword @test @auto-test3@onyx.com
  Scenario: change password test
    When Go to Login page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    And Enter 'auto-test3@onyx.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
    When Go to User ID page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    And Click on 'Change Password' Button in User ID Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
    And Enter 'check' Text in Old Password Field in Change Password Page
    And Enter '5678' Text in New Password Field in Change Password Page
    And Enter '1234' Text in Confirm Password Field in Change Password Page
    And Click 'Change Password' Button in Change Password Page
    And A Warning Has Appeared In Change Password Page
    And Enter '12345678' Text in Old Password Field in Change Password Page
    And Enter '1234' Text in New Password Field in Change Password Page
    And Enter '1234' Text in Confirm Password Field in Change Password Page
    And Click 'Change Password' Button in Change Password Page
    And A Warning Has Appeared In Change Password Page
    And Enter 'check' Text in Old Password Field in Change Password Page
    And Enter 'check' Text in New Password Field in Change Password Page
    And Enter 'check' Text in Confirm Password Field in Change Password Page
    And Wait for 1 seconds
    And Click 'eye old' Button in Change Password Page
    And Click 'eye new' Button in Change Password Page
    And Click 'eye confirm' Button in Change Password Page
    And Wait for 1 seconds
    And Click 'eye old' Button in Change Password Page
    And Click 'eye new' Button in Change Password Page
    And Click 'eye confirm' Button in Change Password Page
    And Click 'Change Password' Button in Change Password Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
    When Go to User ID page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    And Click on 'Logout' Button in User ID Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
    When Go to Login page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    And Enter 'auto-test3@onyx.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
    When Go to User ID page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    And Click on 'Change Password' Button in User ID Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
    And Enter 'check' Text in Old Password Field in Change Password Page
    And Enter 'check' Text in New Password Field in Change Password Page
    And Enter 'check' Text in Confirm Password Field in Change Password Page
    And Wait for 1 seconds
    And Click 'eye old' Button in Change Password Page
    And Click 'eye new' Button in Change Password Page
    And Click 'eye confirm' Button in Change Password Page
    And Wait for 1 seconds
    And Click 'eye old' Button in Change Password Page
    And Click 'eye new' Button in Change Password Page
    And Click 'eye confirm' Button in Change Password Page
    And Click 'Change Password' Button in Change Password Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
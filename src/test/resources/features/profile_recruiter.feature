Feature: Profile Page - Recruiter

  Background:
    When Go to Login page
    And Enter 'auto-test@onyx.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @smoke @profile2222344343 @test @auto-test@onyx.com
  Scenario: Check Profile Page
    When Go to Profile page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    Then 'Menu' Block is Appeared
    Then 'Status Block' Block is Appeared
    Then 'Information Block' Block is Appeared
    Then 'SDT - Current' Block is Appeared
    Then 'SDT - Future' Block is Appeared
    Then 'SDT left' Block is Appeared
    Then 'SDT used' Block is Appeared
    Then 'SDT at own expense' Block is Appeared
    Then 'Working Hours information Card' Block is Appeared
    Then 'SDT Request Card' Block is Appeared
    Then 'Documentation Card' Block is Appeared
    Then 'Начислено часов:' Block is Appeared
    Then 'Требуется часов:' Block is Appeared
    And Check Hours Required In Profile Page
    Then Click 'Make request' Button
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
    Then Click 'Back' Button
    And Wait for 1 seconds
    Then Click 'Details' Button
    Then Click 'Back' Button
Feature: eMail Delivery Check

  Background: Login
    When Go to Login page
    And Enter 'automation@onyx.com' Text in Email Field
    And Enter '9dSQ#mPofVaaZHgKQrs*' Text in Password Field
    And Click on 'Sign In' Button

  @ignore @test @sdtemailcheck @smoke @automation@onyx.com
  Scenario: Create new sdt day
    When Go to Sdt New page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    Then Email Delete message
    Then 'Menu' Field is Appered in SDT NEW Page
    Then 'Create new Sdt' Field is Appered in SDT NEW Page
    Then 'Amount' Field is Appered in SDT NEW Page
    Then 'Create Date' Field is Appered in SDT NEW Page
    Then 'Acting' Field is Appered in SDT NEW Page
    Then 'Save' Button is Appered in SDT NEW Page
    Then 'Back to list' Button is Appered in SDT NEW Page
    When Go to Sdt page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    And Pre Delete SDT
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    When Go to Sdt New page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    And Enter '1' Text in Amount Field in SDT NEW Page
    And To push 'ENTER' in SDT NEW Page
    And Enter Name 'junior1@onyx.com' In Person Field in SDT NEW Page
    And Click 'Add' Button in SDT NEW Page
    And Click 'Save' Button in SDT NEW Page
    And To push 'OK' in SDT NEW Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
    When Go to Sdt page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    And Click 'SDT' Button in SDT NEW Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
    And Click 'delete' Button in SDT NEW Page
    And To push 'OK' in SDT NEW Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
    And Wait for 5 seconds
    Then Email Received
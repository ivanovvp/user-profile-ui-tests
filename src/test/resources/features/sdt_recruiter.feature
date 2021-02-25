Feature: SDT Page - Recruiter

  Background:
    When Go to Login page
    And Enter 'auto-test@onyx.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @smoke @sdt @test @auto-test@onyx.com
  Scenario: Std Page Appeared
    When Go to Sdt page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    Then 'Create new' Button is Appeared
    Then 'View All' Button is Appeared
    Then 'Hide' Button is Appeared
    Then 'Today' Button is Appeared
    Then 'Prev' Button is Appeared
    Then 'Next' Button is Appeared
    Then 'Calendar' Block is Appered in SdtPage
    Then 'SDT left' Block is Appered in SdtPage
    And Click on 'Prev' Button in SDT Page
    And Click on 'Prev' Button in SDT Page
    And Click on 'Today' Button in SDT Page
    And Click on 'Next' Button in SDT Page
    And Click on 'View All' Button in SDT Page
    And Click on 'Hide' Button in SDT Page
    And Click on 'Create new' Button in SDT Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
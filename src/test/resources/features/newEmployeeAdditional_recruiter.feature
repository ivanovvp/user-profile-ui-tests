Feature: New Employee Additional Page - Recruiter

  Background:
    When Go to Login page
    And Enter 'auto-test@onyx.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @smoke @additional @test @auto-test@onyx.com
  Scenario: New Employee Additional Page Appeared
    When Go to New Employee Additional page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    Then 'Menu' Block is Appeared
    Then Table Header 'Request' Field is Appeared in New Employee Additional Page
    Then Table Header 'Created' Field is Appeared in New Employee Additional Page
    Then Table Header 'By' Field is Appeared in New Employee Additional Page
    And Enter Text 'Vasya Kozulkin' In Full Name Field in New Employee Additional Page
    And Select Sex 'Male' In Sex Field in New Employee Additional Page
    And Select Year '1990' In Year Field in New Employee Additional Page
    And Select Month 'Jul' In Month Field in New Employee Additional Page
    And Select Day '8' In Day Field in New Employee Additional Page
    And Select Status 'Married' In Marital Status Field in New Employee Additional Page
    And Enter Text'2' In Children Field in New Employee Additional Page
    Then Is 'Transfer Candidate to Employee' Button Appeared in New Employee Additional Page



Feature: Vacancy Closed Page - Recruiter

  Background:
    When Go to Login page
    And Enter 'auto-test@onyx.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @smoke @vacancyClosed @test @auto-test@onyx.com
  Scenario: Vacancy ID Page Appeared
    When Go to Vacancy Closed page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    Then 'Menu' Block is Appeared
    Then Is Block Appeared 'Request' in Closed Vacancy Page
    Then Is Block Appeared 'Created' in Closed Vacancy Page
    Then Is Block Appeared 'By' in Closed Vacancy Page
    Then Checking status 'Central Status Vacancy' in Closed Vacancy Page
    Then Checking status 'Employed' in Closed Vacancy Page
    And Click 'View Request Info' Button in Closed Vacancy Page
    And Check Status Code and assert
    And Wait for 1 seconds
    And Click 'Back' Button in Closed Vacancy Page
    And Check Status Code and assert
    And Wait for 1 seconds
    And Click 'View candidate History' Button in Closed Vacancy Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Is Block Appeared 'Candidate Status: Employed' in Closed Vacancy Page
    And Click 'Back To Candidates List' Button in Closed Vacancy Page
    And Check Status Code and assert
    And Wait for 1 seconds
    And Click 'Candidate Employed Link' Button in Closed Vacancy Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Is Block Appeared 'Employed' in Closed Vacancy Page
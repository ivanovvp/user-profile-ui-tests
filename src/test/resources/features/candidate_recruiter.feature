Feature: Candidate Page - Recruiter

  Background:
    When Go to Login page
    And Enter 'auto-test@onyx.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @smoke @candidate @test @auto-test@onyx.com
  Scenario: Candidate Page Appeared
    When Go to Candidate page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    Then 'Menu' Block is Appeared
    Then 'Candidate Index' Block is Appeared
    Then Is 'Search' Block is Appeared in Candidate Page
    Then Is 'Photo' Block is Appeared in Candidate Page
    Then Is 'Name' Block is Appeared in Candidate Page
    Then Is 'Surname' Block is Appeared in Candidate Page
    Then Is 'Applying position' Block is Appeared in Candidate Page
    Then Is 'Location' Block is Appeared in Candidate Page
    Then Is 'Phone' Block is Appeared in Candidate Page
    And Wait for 1 seconds
    And Click 'Pagination 2 Page' Field and Button in Candidate Page
    And Check Status Code and assert
    And Click 'Pagination 3 Page' Field and Button in Candidate Page
    And Check Status Code and assert
    And Click 'Pagination Last Page' Field and Button in Candidate Page
    And Check Status Code and assert
    And Click 'Pagination First Page' Field and Button in Candidate Page
    And Check Status Code and assert
    And Enter Text 'Odessa' In Location Field in Candidate Page
    And Click 'Location Set' Field and Button in Candidate Page
    And Enter Text 'QA Engineer' In Applying Position Field in Candidate Page
    And Click 'Applying Set' Field and Button in Candidate Page
    And Enter Text 'Linux' In Skills Field in Candidate Page
    And Click 'Skills Set' Field and Button in Candidate Page
    And Enter Text 'Auto Test' In Full Name Field in Candidate Page
    And Click 'Full Name Set' Field and Button in Candidate Page
    And Click 'Location Unset' Field and Button in Candidate Page
    And Click 'Applying Unset' Field and Button in Candidate Page
    And Click 'Skills Unset' Field and Button in Candidate Page
    And Click 'Full Name Unset' Field and Button in Candidate Page
    And Click 'Clear filters' Field and Button in Candidate Page
    And Click 'Create New' Field and Button in Candidate Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
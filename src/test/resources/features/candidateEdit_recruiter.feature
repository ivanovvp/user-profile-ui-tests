Feature: Candidate Edit Page - Recruiter

  Background:
    When Go to Login page
    And Enter 'auto-test@onyx.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @smoke @candidateedit @test @auto-test@onyx.com
  Scenario: Candidate Edit Page Appeared
    When Go to Candidate Edit page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    And Check 'Photo Choose File' Button In Candidate Edit Page
    And Enter Text 'Auto_Test_v.1' In Name Field in Candidate Edit Page
    And Enter Text 'Auto_Test_v.1' In Surname Field in Candidate Edit Page
    And Enter Text 'QA Engineer' In Current Position Field in Candidate Edit Page
    And Enter Text 'QA Engineer' In Applying Position Field in Candidate Edit Page
    And Check 'CV Choose File' Button In Candidate Edit Page
    And Enter Text 'Odessa' In Location Field in Candidate Edit Page
    And Click 'Vacancy' Button in Candidate Edit Page
    And Enter Text '+380631234567' In Phone Field in Candidate Edit Page
    And Enter Text 'autotest@gmail.com' In Email Field in Candidate Edit Page
    And Enter Text 'https://www.linkedin.com/' In LinkedIn Field in Candidate Edit Page
    And Enter Text 'https://www.facebook.com/' In Facebook Field in Candidate Edit Page
    And Enter Text '2500' In Salary Field in Candidate Edit Page
    And Enter Text '3+' In Experience Field in Candidate Edit Page
    And Enter Text 'higher' In Education Field in Candidate Edit Page
    And Enter Text 'yes' In Employment Field in Candidate Edit Page
    And Enter Text 'Hello World' In Comment Field in Candidate Edit Page
    And Enter Text 'Linux' In Skills Field
    And Click 'Add' Button in Candidate Edit Page
    And Enter Text 'MySQL' In Skills Field
    And Click 'Add' Button in Candidate Edit Page
    And Enter Text 'PHP' In Skills Field
    And Click 'Add' Button in Candidate Edit Page
    And Enter Text 'Jira' In Skills Field
    And Click 'Add' Button in Candidate Edit Page
    And Wait for 1 seconds
    And Click 'Remove' Button in Candidate Edit Page
    And Click 'Remove' Button in Candidate Edit Page
    And Click 'Remove' Button in Candidate Edit Page
    And Click 'Remove' Button in Candidate Edit Page
    And Click 'Update' Button in Candidate Edit Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
    And Click 'Back' Button
    And Click 'back to list' Button in Candidate Edit Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
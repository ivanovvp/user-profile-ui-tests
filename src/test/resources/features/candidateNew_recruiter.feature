Feature: Candidate New Page - Recruiter

  Background:
    When Go to Login page
    And Enter 'auto-test@onyx.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @smoke @candidateNew @test @auto-test@onyx.com
  Scenario: Candidate New Page Appeared
    When Go to Candidate New page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    And Check 'Photo Choose File' Button In Candidate New Page
    And Enter Text 'Vasya' In Name Field in Candidate New Page
    And Enter Text 'Petrovich' In Surname Field in Candidate New Page
    And Enter Text 'QA Engineer' In Current Position Field in Candidate New Page
    And Enter Text 'QA Engineer' In Applying Position Field in Candidate New Page
    And Check 'CV Choose File' Button In Candidate New Page
    And Enter Text 'Odessa' In Location Field in Candidate New Page
    And Enter Text '+380631234567' In Phone Field in Candidate New Page
    And Enter Text 'autotest@gmail.com' In Email Field in Candidate New Page
    And Enter Text 'https://www.linkedin.com/' In LinkedIn Field in Candidate New Page
    And Enter Text 'https://www.facebook.com/' In Facebook Field in Candidate New Page
    And Enter Text '2500' In Salary Field in Candidate New Page
    And Enter Text '3+' In Experience Field in Candidate New Page
    And Enter Text 'higher' In Education Field in Candidate New Page
    And Enter Text 'yes' In Employment Field in Candidate New Page
    And Enter Text 'Hello World' In Comment Field in Candidate New Page
    And Enter Text 'Linux' In Skills Field in Candidate New Page
    And Click 'Add' Button in Candidate New Page
    And Enter Text 'MySQL' In Skills Field in Candidate New Page
    And Click 'Add' Button in Candidate New Page
    And Enter Text 'PHP' In Skills Field in Candidate New Page
    And Click 'Add' Button in Candidate New Page
    And Enter Text 'Jira' In Skills Field in Candidate New Page
    And Click 'Add' Button in Candidate New Page
    And Wait for 1 seconds
    And Click 'Remove' Button in Candidate New Page
    And Click 'Remove' Button in Candidate New Page
    And Click 'Remove' Button in Candidate New Page
    And Click 'Remove' Button in Candidate New Page
    And Click 'back to list' Button in Candidate New Page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Redirect to the Expected Page Worked
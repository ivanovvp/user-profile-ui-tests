Feature: User Create New Page - Account Manager

  Background:
    When Go to Login page
    And Enter 'auto-test-limon4-zorgan@nexteum.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @smoke @userCreateNew @test @auto-test-limon4-zorgan@nexteum.com
  Scenario: Check User Page
    When Go to User Create New page
    And Wait for 1 seconds
    And Check Status Code and assert
    Then 'Save' Button is Available in User Create New Page
    Then 'back to list' Button is Available in User Create New Page
    And Enter Name 'Vasya Gnom' In Name Text Field in User Create New Page
    And Select Office 'Lustdorfska road (Odessa, Ukraine)' In Office Field in User Create New Page
    And Select Department 'Development team' In Department Field in User Create New Page
    And Select Team 'Display Team' In Team Field in User Create New Page
    And Enter eMail 'vasyagnom@gmail.com' In eMail Text Field in User Create New Page
    And Select Year '2019' In Create Date Year Field in User Create New Page
    And Select Month 'Jul' In Create Date Month Field in User Create New Page
    And Select Day '25' In Create Date Day Field in User Create New Page
    And Select Hour '16' In Create Date Hour Field in User Create New Page
    And Select Minute '20' In Create Date Minute Field in User Create New Page
    And Enter Password 'password' In Password Text Field in User Create New Page
    And Enter Sub Team 'CRM Team' In Sub Team Text Field in User Create New Page
    And Enter Position 'QA Engineer' In Position Text Field in User Create New Page
    And Enter Phone '+380631234567' In Phone Text Field in User Create New Page
    And Enter Skype 'vasyagnom' In Skype Text Field in User Create New Page
    And Enter Personal eMail 'vasyagnom@gmail.com' In Personal eMail Text Field in User Create New Page
    And Enter Salary '2500)' In Salary Text Field in User Create New Page
    And Select Sex 'male' In Sex Field in User Create New Page
    And Select Year '1980' In Birth Day Year Field in User Create New Page
    And Select Month 'Jun' In Birth Day Month Field in User Create New Page
    And Select Day '9' In Birth Day Day Field in User Create New Page
    And Select Marital Status 'married' In Marital Status Field in User Create New Page
    And Enter Text '2' In Children Field in User Create New Page
    And Enter Location 'Odessa' In Location Text Field in User Create New Page
    And Click on 'back to list' Field in User Create New Page
    And Wait for 1 seconds
    And Check Status Code and assert
Feature: Approve Candidate Page - Department Manager

  Background:
    When Go to Login page
    And Enter 'auto-test-manager@onyx.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @smoke @approvecandidate @test @auto-test-manager@onyx.com
  Scenario: Approve Candidate Page
    When Go to Approve Candidate page
    And Check Status Code and assert
    And Wait for 1 seconds
    Then Requested Page Available
    And Select '1' In Office Field in Approve Candidate Page
    And Select '1' In Department Field in Approve Candidate Page
    And Select '1' In Team Field in Approve Candidate Page
    And Enter Text 'QA' In Enterpreneur Field in Approve Candidate Page
    And Enter Text 'Senior' In Level Field in Approve Candidate Page
    And Enter Text '01012001' In Start Date Field in Approve Candidate Page
    And Enter Text '2500' In Salary Field in Approve Candidate Page
    And Enter Text 'Room' In Work Place Field in Approve Candidate Page
    And Enter Text 'Verblyuzhonok' In Nick Name Field in Approve Candidate Page
    And Check 'Send' Button is Appeared in Approve Candidate Page
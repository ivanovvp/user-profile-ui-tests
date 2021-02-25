Feature: Create New User Php Developer Level Relation Page - Account Manager

  Background:
    When Go to Login page
    And Enter 'auto-test-limon4-zorgan@nexteum.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @smoke @user @createNewUserPhpDeveloperLevelRelation @auto-test-limon4-zorgan@nexteum.com
  Scenario: Check Create New User Php Developer Level Relation Page
    When Go to Create new User Php Developer Level Relation page
    And Wait for 1 seconds
    And Check Status Code and assert
    Then 'Menu' Block is Appeared
    Then Select Level 'PHP Trainee' In Php Developer Level Field In Create New User Php Developer Level Relation Page
    Then Select Level 'PHP Junior Level 1' In Php Developer Level Field In Create New User Php Developer Level Relation Page
    Then Select Level 'PHP Middle Level 1' In Php Developer Level Field In Create New User Php Developer Level Relation Page
    Then Select Level 'PHP Senior Level 1' In Php Developer Level Field In Create New User Php Developer Level Relation Page
    Then Select Level 'PHP Senior Level 2' In Php Developer Level Field In Create New User Php Developer Level Relation Page
    And Click 'Back to List' Button In Create New User Php Developer Level Relation Page

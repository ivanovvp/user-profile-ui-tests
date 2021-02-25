Feature: Create New User Php Developer Level Relation Page - Account Manager

  Background:
    When Go to Login page
    And Enter 'auto-test-limon4-zorgan@nexteum.com' Text in Email Field
    And Enter 'check' Text in Password Field
    And Click on 'Sign In' Button

  @all @smoke @user @createNewQaUserManagerRelation @auto-test-limon4-zorgan@nexteum.com
  Scenario: Check Create New User Php Developer Level Relation Page
    When Go to Create new Qa User Manager Relation page
    And Wait for 1 seconds
    And Check Status Code and assert
    Then 'Menu' Block is Appeared
    Then Select manager 'taisiya.mi@onyx.com' In QA Manager Field In Create New User Php Developer Level Relation Page
    Then Select manager 'oleksandra.bi@onyx.com' In QA Manager Field In Create New User Php Developer Level Relation Page
    Then Select manager 'yuliya.du@onyx.com' In QA Manager Field In Create New User Php Developer Level Relation Page
    Then Select manager 'oleksandra.ha@onyx.com' In QA Manager Field In Create New User Php Developer Level Relation Page
    And Click 'Back to List' Button In Create new Qa User Manager Relation Page

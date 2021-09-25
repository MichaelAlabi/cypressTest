Feature: Mobile L1 tile validation

    application regression

    Scenario: Mobile tile is clickable and navigated to the correct page
    Given I am navigated to virgin media's help page
    And I switch to mobile device view
    When I click the mobile tile
    Then I should be navigated to virgin media's mobile page 
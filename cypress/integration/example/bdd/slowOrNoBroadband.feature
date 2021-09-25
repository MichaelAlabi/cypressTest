Feature: Slow Or No Broadband L1 tile validation

    application regression

    Scenario: Slow Or No Broadband tile is clickable and navigated to the correct page
    Given I am navigated to virgin media's help page
    And I switch to mobile device view
    When I click slow or no broadband tile
    Then I should be navigated to virgin media's check services page 
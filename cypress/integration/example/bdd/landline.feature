Feature: Landline L1 tile validation

    application regression

    Scenario: Landline tile is clickable and navigated to the correct page
    Given I am navigated to virgin media's help page
    And I switch to mobile device view
    When I click the landline tile
    Then I should be navigated to virgin media's landline page 
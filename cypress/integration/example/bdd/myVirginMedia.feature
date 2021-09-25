Feature: My Virgin Media L1 tile validation

    application regression

    Scenario: My Virgin Media tile is clickable and navigated to the correct page
    Given I am navigated to virgin media's help page
    And I switch to mobile device view
    When I click my virgin media tile
    Then I should be navigated to my virgin media page 
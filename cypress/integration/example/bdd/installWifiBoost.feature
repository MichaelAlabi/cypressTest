Feature: Installing Wifi Booster L1 tile validation

    application regression

    Scenario: Installing Wifi Booster tile is clickable and navigated to the correct page
    Given I am navigated to virgin media's help page
    And I switch to mobile device view
    When I click the installing wifi boosters tile
    Then I should be navigated to virgin media's setting up a booster page 
Feature: Billing and Payments L1 tile validation

    application regression

    Scenario: Billing and Payments tile is clickable and navigated to the correct page
    Given I am navigated to virgin media's help page
    And I switch to mobile device view
    When I click the billing and payments tile
    Then I should be navigated to virgin media's billing page 
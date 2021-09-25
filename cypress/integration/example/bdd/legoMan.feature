    Feature: Lego Man Sign in validation

    E2E Lego Man

    Scenario: legoMan 
    Given I am navigated to virgin media's staging environment on mobile device view
    And I click the lego man logo
    When I click the sign in button and I enter my registered credentials
    And I click the submit button
    Then I should be successfully signed in
    
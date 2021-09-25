Feature: Dissmiss lego man Sign in modal validation

    E2E Dissmiss Lego Man

    Scenario: Dissmiss modal
    Given I am navigated to virgin media's staging environment on mobile device view
    And I click the lego man logo
    And I can see the lego man sign in modal in view
    When I click the cancel button within the lego man sign in modal
    Then the lego man sign in modal should be dissmissed
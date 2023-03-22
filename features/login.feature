Feature: Practice Website

  Scenario Outline: I can add a user

    Given I am on the table page
    When I add user with <username> and <cell>
    Then I should see the user <username>

    Examples:
      | username | cell   |
      | tomsmith | 123321 |
      | foobar   | barfoo |

  Scenario Outline: I can remove a user

    Given I am on the table page
    When I remove user <username>
    Then I should not see the user <username>

    Examples:
      | username |
      | novak   |
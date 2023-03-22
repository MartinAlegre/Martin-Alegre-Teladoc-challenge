import { Given, When, Then } from '@wdio/cucumber-framework';

import TablePage from '../pageobjects/user.page.js';

const pages = {
    table: TablePage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I add user with (\w+) and (.+)$/, async (username, cell) => {
    await TablePage.addUser(username, cell)
});

Then(/^I should see the user (\w+)$/, async (username) => {
    await expect(TablePage.newUser).toBeExisting();
    await expect(TablePage.newUser).toHaveTextContaining(username);
});

When(/^I remove user (\w+)$/, async (username) => {
    await TablePage.removeUser(username);
    await TablePage.clickDelete();
});

Then(/^I should not see the user (\w+)$/, async (username) => {
    await expect(TablePage.newUser).toBeExisting();
    await expect(TablePage.newUser).not.toHaveTextContaining(username);
});
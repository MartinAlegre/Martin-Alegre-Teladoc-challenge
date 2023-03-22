

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TablePage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUserName () {
        return $("input[name='UserName']");
    }

    get inputFirstName () {
        return $("input[name='FirstName']");
    }

    get btnAddUser () {
        return $("button[type='add']");
    }

    get dropdownRole () {
        return $("select[name='RoleId']");
    }
    
    get inputCellPhone () {
        return $("input[name='Mobilephone']");
    }

    get newUser () {
        return $("table[table-title='Smart Table example']")
    }

    get btnConfirmUser () {
        return $("button[ng-click='save(user)']");
    }
    
    get btnDeleteUser() {
        return $("button[class='btn ng-scope ng-binding btn-primary']")
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async addUser (username, cell) {
        await this.btnAddUser.click();
        await this.inputUserName.setValue(username);
        await this.inputFirstName.setValue(username);
        await this.dropdownRole.selectByIndex(1);
        await this.inputCellPhone.setValue(cell);
        await this.btnConfirmUser.click();
        
    }

    async clickDelete () {
        await this.btnDeleteUser.waitForExist(2000);
        await this.btnDeleteUser.click();
    }

    async removeUser (username) {
        const rows = await this.newUser.$$('tbody tr')
        await rows.forEach( async row => {
                var data = await row.getText();
                data = await String(data);
                if(data.includes(username)){
                    row.$("button[ng-click='delUser()']").click();
                }
        })
    }


    open () {
        return super.open('angularjs-protractor/webtables/');
    }

}

export default new TablePage();

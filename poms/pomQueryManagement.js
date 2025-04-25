import { defaultConfig, test, expect} from '@playwright/test'

exports.QueryManPom = class QueryManPom {
    //this is the pom for what appears when you are logged in and you click on the query management button

    constructor(page) {

        this.page = page;
        this.btnQueryManagement = page.locator('#nav-link-query-management');
        this.btnQueryManagementText = "Query Management";
        this.dropdownEntriesPerPage = page.getByLabel('entries per page');
        this.lblLoggedQueries = page.getByText('Queries Logged by me');
        this.chkBoxLoggedQueries = page.getByRole('checkbox', { name: 'Queries Logged by me' });
        this.lblAssignedQueries = page.getByText('Queries Assign to me'));
        this.chkBoxAssignedQueries = page.getByRole('checkbox', { name: 'Queries Assign to me' });

    }
}

async goto() {
    await this.page.goto('https://uat-webserver.cso.ie/RMS/client/');
}
async getStarted() {

    //find all the elements you would expect in the query management page  after the query management button is clicked.
    
    await expect(this.boxCSOIdentifier).toBeVisible();
    await expect(this.btnQueryManagement).toBeVisible();
    await expect(this.btnQueryManagement).toContainText(btnQueryManagementText);
    await expect(this.dropdownEntriesPerPage.toBeVisible());
    
    await expect(this.lblLoggedQueries.toBeVisible());
    await expect(this.lblAssignedQueries.toBeVisible());
    await expect(this.chkBoxAssignedQueries.toBeVisible());


}    
async pageObjectModel() {
    await this.getStarted();
    await this.boxCSOIdentifier.click();
}


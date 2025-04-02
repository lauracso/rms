// a file to create a page object model for RMS for DMS
import { test, expect } from '@playwright/test';

exports.RMSDMSPage = class RMSDMSPage {

    /*
        @param {import('@playwright/test').Page} page 
    */     
    constructor(page) {
        this.page = page;
        this.csoImage = page.getByRole('link', {name: 'Central Statistics Office, Ireland'});
        this.pageTitle = page.getByRole('heading', {name: 'RMS for DMS', exact:true });
        this.navHomeLink = page.getByRole('link', {name: 'Home'});
        this.navSurveyLink = page.getByRole('link', {name: 'Survey Maintenance'});
        this.navUsersLink = page.getByRole('link', {name: 'Users'});
        this.navSystemLink = page.getByRole('button', {name: 'System'});
        this.navLoggedInUser = page.getByRole('heading', {name:'Laura Egar'});
    }

    async goto() {
        await this.page.goto('https://uat-webserver.cso.ie/RMS/client/');
    }
    
    async getStarted() {
           await expect(this.navLoggedInUser).toBeVisible();
           await expect(this.navHomeLink).toBeVisible();
      }
    async pageObjectModel() {
        await this.getStarted();
        await this.navLoggedInUser.click();
    }
}
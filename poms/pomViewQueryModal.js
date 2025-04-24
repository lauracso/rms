import { test, expect } from '@playwright/test';

exports.ViewQueryModal = class ViewQueryModal {

    constructor (page){
        this.page = page;
        this.btnViewSurveyInstanceButton = page.locator('#view-survey-instance-details');
    }

    async goto() {
        await this.page.goto('https://uat-webserver.cso.ie/RMS/client/');
    }
    async getStarted() {
        await expect(this.boxCSOIdentifier).toBeVisible();

    }    
    async pageObjectModel() {
        await this.getStarted();
        await this.boxCSOIdentifier.click();
    }
}



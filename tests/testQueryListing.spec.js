import { defineConfig, test, expect } from '@playwright/test';
import { QueryListingPom } from '../poms/pomQueryListing';

test('check aer lingus survey filters exist', async ({page }) => {
    const queryListingPage = new QueryListingPom(page);
    await queryListingPage.goto();
    await queryListingPage.getStarted();
    await queryListingPage.pageObjectModel();

    await expect(queryListingPage.btnSurveyPeriod).toBeVisible();
    await expect(queryListingPage.btnIssueDate).toBeVisible(); 
    await expect(queryListingPage.btnReceivedDate).toBeVisible();
    await expect(queryListingPage.nameOfSurvey).toBeVisible();
    await expect(queryListingPage.bcFirst).toBeVisible();
    await expect(queryListingPage.bcPrevious).toBeVisible();
    await expect(queryListingPage.paginatorPg1).toBeVisible();
    await expect(queryListingPage.bcNext).toBeVisible();

});

test('check view buttons appear when monthly services inquiry is clicked ', async ({page}) => {
    const queryListingPage = new QueryListingPom(page);
    await queryListingPage.goto();
    await queryListingPage.getStarted();
    await queryListingPage.pageObjectModel();

    await expect(queryListingPage.monthlyServicesInquiry).toBeVisible();
    await queryListingPage.monthlyServicesInquiry.click();

});

test('test query interaction', async ({ page }) => {
    const queryListingPage = new QueryListingPom(page);
    await queryListingPage.goto();
    await queryListingPage.getStarted();
    await queryListingPage.pageObjectModel();

});

// @ts-check
import { test, expect } from '@playwright/test';


test('Get to RMS for DMS page', async ({ page }) => {

    let user = process.env.USER_NAME;
    let pass = process.env.PASSWORD;
  
    await page.goto('https://login.microsoftonline.com/');
     // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Sign in to your account/);
    await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).click();
    await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill(user);
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('textbox', { name: 'Enter the password for laura.' }).click();
    await page.getByRole('textbox', { name: 'Enter the password for laura.' }).fill(pass);
    await page.getByRole('button', { name: 'Sign in' }).click();

    await page.goto('https://uat-webserver.cso.ie/RMS/client/');
    //<input type="text" class="form-control" maxlength="10" name="enterpriseNumber" placeholder="Enter a CSO Identifier.." id="enterpriseNumber">
    await page.getByRole('textbox', {name: 'Enter a CSO identifier..'}).click();
    await page.screenshot({ path: 'screenshot.png', fullPage: true });

    //nav bar assertions
    await expect(page.locator('#nav-link-home')).toHaveText('Home');
    await expect(page.locator('#nav-link-survey')).toHaveText('Survey Maintenance');
    await expect(page.locator('#nav-link-user-management')).toHaveText('Users');

});

import { test as setup } from '@playwright/test';

const authFile = './rmsfordms/.auth/me.json';
const email = 'laura.egar@gmail.com';
const pass = "Ili16ctmfrci!$";

setup('authenticate', async ({ page}) => {

    await page.goto('https://login.microsoftonline.com');
    await expect(page).toHaveTitle(/Sign in to your account/);
    await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).click();
    await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill(user);
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('textbox', { name: 'Enter the password for laura.' }).click();
    await page.getByRole('textbox', { name: 'Enter the password for laura.' }).fill(pass);
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.context().storageState({ path: authFile});
});


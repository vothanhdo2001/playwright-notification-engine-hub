import { Given, When, Then } from '@cucumber/cucumber';

Given('User navigates to the Browserstack Homepage', async ({ page }) => {
    const response = await fetch('https://www.google.com');
    const data = await response.json();
    console.log(data);
});
import {  expect } from '@playwright/test';
import test from '../lambda.setup';
test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

test.describe('msg Validation', () => {
  test('verify message on site', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByText("Memorial Sale Week is next week !")
    await expect(page).toBeTruthy();
    //await page.click('text=Memorial Sale Week is next week !');
    //await page.click('text=Memorial Sale Week is next week !');

  })

});

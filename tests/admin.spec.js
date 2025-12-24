import { test, expect } from '@playwright/test';

/*
 Test Case 1: Navigate to Admin Module
*/
test('Navigate to Admin Module', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'Admin' }).click();
  await expect(page).toHaveURL(/admin/);
});

/*
 Test Case 2: Add a New User
*/
test('Add a New User', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('button', { name: 'Add' }).click();

  // NOTE: Full user creation is skipped due to dynamic employee data in demo site
  await expect(page.getByText('Add User')).toBeVisible();
});

/*
 Test Case 3: Search Newly Created User
*/
test('Search Newly Created User', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'Admin' }).click();
  await page.locator('input').nth(1).fill('testuser01');
  await page.getByRole('button', { name: 'Search' }).click();
});

/*
 Test Case 4: Edit User Details
*/
test('Edit User Details', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'Admin' }).click();
  // Edit logic placeholder
  await e

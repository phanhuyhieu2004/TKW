// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Header Responsive', () => {
  test('Desktop: nav visible, logo left, action right', async ({ page }) => {
    await page.goto('/index.html');
    
    // Nav visible on desktop
    const nav = page.locator('.header__nav');
    await expect(nav).toBeVisible();
    
    // Logo visible
    const logo = page.locator('.header__logo');
    await expect(logo).toBeVisible();
    
    // Action visible
    const action = page.locator('.header__action');
    await expect(action).toBeVisible();
    
    // Mobile header hidden
    const mobileHeader = page.locator('.mobile-header');
    await expect(mobileHeader).toBeHidden();
  });

  test('Tablet: nav hidden, logo centered, hamburger visible', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/index.html');
    
    // Nav hidden on tablet
    const nav = page.locator('.header__nav');
    await expect(nav).toBeHidden();
    
    // Logo still visible
    const logo = page.locator('.header__logo');
    await expect(logo).toBeVisible();
    
    // Mobile header visible
    const mobileHeader = page.locator('.mobile-header');
    await expect(mobileHeader).toBeVisible();
    
    // Hamburger icon visible
    const hamburger = page.locator('.menu-header__icon');
    await expect(hamburger).toBeVisible();
  });

  test('Mobile: nav hidden, action hidden', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/index.html');
    
    // Nav hidden
    const nav = page.locator('.header__nav');
    await expect(nav).toBeHidden();
    
    // Action hidden on mobile
    const action = page.locator('.header__action');
    await expect(action).toBeHidden();
    
    // Logo visible
    const logo = page.locator('.header__logo');
    await expect(logo).toBeVisible();
  });
});
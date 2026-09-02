// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Menu Drawer', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/index.html');
  });

  test('Menu drawer hidden by default', async ({ page }) => {
    const drawer = page.locator('.menu-drawer');
    
    // Drawer should be off-screen (translated left)
    await expect(drawer).toHaveCSS('transform', /translateX\(-100%\)/);
  });

  test('Click hamburger opens menu drawer', async ({ page }) => {
    const checkbox = page.locator('#checkbox-header');
    const drawer = page.locator('.menu-drawer');
    const hamburger = page.locator('.menu-header__icon');
    
    // Click hamburger
    await hamburger.click();
    
    // Checkbox should be checked
    await expect(checkbox).toBeChecked();
    
    // Drawer should slide in (transform to 0)
    await expect(drawer).toHaveCSS('transform', /translateX\(0(px)?\)/);
  });

  test('Click close button closes menu drawer', async ({ page }) => {
    const checkbox = page.locator('#checkbox-header');
    const hamburger = page.locator('.menu-header__icon');
    const closeBtn = page.locator('.icon-close');
    
    // Open menu first
    await hamburger.click();
    await expect(checkbox).toBeChecked();
    
    // Click close
    await closeBtn.click();
    
    // Checkbox should be unchecked
    await expect(checkbox).not.toBeChecked();
  });

  test('Overlay appears when menu opens', async ({ page }) => {
    const checkbox = page.locator('#checkbox-header');
    const overlay = page.locator('.menu-overlay');
    const hamburger = page.locator('.menu-header__icon');
    
    // Before click - overlay hidden
    await expect(overlay).toHaveCSS('opacity', '0');
    
    // Click hamburger
    await hamburger.click();
    
    // Overlay should appear
    await expect(checkbox).toBeChecked();
    await expect(overlay).toHaveCSS('opacity', '1');
  });

  test('Click overlay closes menu', async ({ page }) => {
    const checkbox = page.locator('#checkbox-header');
    const hamburger = page.locator('.menu-header__icon');
    const overlay = page.locator('.menu-overlay');
    
    // Open menu
    await hamburger.click();
    await expect(checkbox).toBeChecked();
    
    // Click overlay
    await overlay.click();
    
    // Menu should close
    await expect(checkbox).not.toBeChecked();
  });

  test('Menu links are visible inside drawer', async ({ page }) => {
    const hamburger = page.locator('.menu-header__icon');
    
    await hamburger.click();
    
    // Check menu items visible
    const menuItems = page.locator('.menu-drawer .menu__link');
    await expect(menuItems).toHaveCount(4);
    
    // First item is Home
    await expect(menuItems.first()).toHaveText('Home');
  });
});
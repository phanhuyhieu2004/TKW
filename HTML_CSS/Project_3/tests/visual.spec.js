// @ts-check
const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

const SCREENSHOT_DIR = path.join(__dirname, 'screenshots');

test.describe('Visual Screenshots', () => {
  test.beforeAll(() => {
    if (!fs.existsSync(SCREENSHOT_DIR)) {
      fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
    }
  });

  test('Desktop 1280px - Full page', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/index.html');
    await page.waitForLoadState('networkidle');
    
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, 'desktop-1280.png'),
      fullPage: true,
    });
  });

  test('Tablet 768px - Header area', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/index.html');
    await page.waitForLoadState('networkidle');
    
    // Screenshot header only
    const header = page.locator('.header');
    await header.screenshot({
      path: path.join(SCREENSHOT_DIR, 'tablet-header-768.png'),
    });
    
    // Full page
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, 'tablet-768.png'),
      fullPage: true,
    });
  });

  test('Mobile 375px - Menu drawer open', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/index.html');
    
    // Open menu
    await page.click('.menu-header__icon');
    await page.waitForTimeout(500); // Wait for animation
    
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, 'mobile-menu-open-375.png'),
    });
  });

  test('Mobile 375px - Full page', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/index.html');
    await page.waitForLoadState('networkidle');
    
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, 'mobile-375.png'),
      fullPage: true,
    });
  });

  test('Desktop - Team section', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/index.html');
    
    const teamSection = page.locator('.team');
    await teamSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    
    await teamSection.screenshot({
      path: path.join(SCREENSHOT_DIR, 'team-section.png'),
    });
  });
});
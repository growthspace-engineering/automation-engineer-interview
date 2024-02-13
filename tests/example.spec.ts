import { test, expect } from '@playwright/test';

const describe = test.describe;

describe('application title', () => {
  test('has correct title', async ({ page }) => {
    await page.goto('https://thatkookooguy.github.io/arcade-playlist/game-collection?sortBy=A%20-%20Z');
  
    await expect(page).toHaveTitle(/Arcade Playlist/);
  });
  
  test('game playlist header cover', async ({ page }) => {
    await page.goto('https://thatkookooguy.github.io/arcade-playlist/game-collection?sortBy=A%20-%20Z');
  
    await expect(page.locator('.kb-playlist-image')).toBeVisible();
  });
});


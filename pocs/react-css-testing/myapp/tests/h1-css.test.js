const { test, expect } = require('@playwright/test');

test('h1 has correct CSS classes', async ({ page }) => {
  await page.goto('/');
  const h1 = await page.$('h1');
  const classList = await h1.evaluate(node => node.className);
  expect(classList).toContain('text-3xl');
  expect(classList).toContain('font-bold');
  expect(classList).toContain('underline');
});
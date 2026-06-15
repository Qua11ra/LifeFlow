import { test, expect } from 'playwright/test'

test('should add a todo item', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc')

  const input = page.getByPlaceholder('What needs to be done?')
  await expect(input).toBeVisible()

  await input.fill('Buy groceries')
  await input.press('Enter')

  const todoItem = page.getByText('Buy groceries')
  await expect(todoItem).toBeVisible()

  const itemCount = page.getByText('1 item left')
  await expect(itemCount).toBeVisible()
})

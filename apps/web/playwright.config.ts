import { defineConfig } from 'playwright/test'
import { basePlaywrightConfig } from '@repo/shared-configs/playwright'

export default defineConfig({
    ...basePlaywrightConfig,
    testDir: './e2e',
})

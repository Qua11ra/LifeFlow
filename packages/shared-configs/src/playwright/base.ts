import type { PlaywrightTestConfig } from 'playwright/test'

export const basePlaywrightConfig: Partial<PlaywrightTestConfig> = {
    timeout: 30000,
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
    },
    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' },
        },
    ],
}

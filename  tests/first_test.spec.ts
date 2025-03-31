import {test, expect} from '@playwright/test'


test( 'My first Securiti test', async ({page}) => {
    
    // await page.pause()
    await page.goto('https://qa.securiti.xyz/#/login')
    await expect(page).toHaveTitle('Login — Securiti.ai', {timeout: 12_000})
    await page.locator('//*[@placeholder="Email"]').fill('sachal@qa-khi-multicloud-uiautiomation.com')
    await page.locator('//*[@class="v-btn__content" and text()="Continue"]').click()
    await page.locator('//*[@type="password" and @placeholder="Password"]').fill('Privaci@129831798')
    await page.locator('//*[@class="v-btn__content" and text()="Sign in"]').click()

    await expect(page).toHaveTitle('Securiti.ai', {timeout: 8_000}) //wait max 8 seconds for login
    //await expect(page.locator()).toHaveText()

    await page.goto('https://qa.securiti.xyz/#/settings/datasystems-monitored')
    await page.locator('//input[@placeholder="Filter by name"]').fill('Dropbox')

    if ((await page.locator('//*[contains(@class,"f-text-big-content") and normalize-space(text())="Dropbox"]/following-sibling::*[contains(@class,"f-text-content") and normalize-space(text())="Self-hosted"]/../../../following-sibling::*/descendant::button/descendant::span').textContent()) === 'View Instances')
        {
            await page.locator('//*[contains(@class,"f-text-big-content") and normalize-space(text())="Dropbox"]/following-sibling::*[contains(@class,"f-text-content") and normalize-space(text())="Self-hosted"]/../../../following-sibling::*/descendant::button/descendant::span[text()="View Instances"]').click()

        }

    await page.waitForTimeout(5000);

    // if (await page.locator("//table[contains(@class,'v-datatable v-table')]/tbody/tr/descendant::*[text()='Dropbox_Auto_Test1']").count() > 0)
        // {
    await page.locator("//table[contains(@class,'v-datatable v-table')]/tbody/tr/descendant::*[text()='Dropbox_Auto_Test1']").click()

        // }
    await expect(page).toHaveTitle('Monitored data systems — Securiti.ai')

    await page.pause()

})
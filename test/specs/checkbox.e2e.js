import { expect } from '@wdio/globals'
import CheckboxPage from '../pageobjects/checkboxes.page.js'

describe('My Checkboxes application', () => {
    it('should load successfully', async () => {
        await CheckboxPage.open()

        await expect(CheckboxPage.header).toHaveText("Checkboxes");
        await expect(CheckboxPage.checkbox1).not.toBeSelected();
        await expect(CheckboxPage.checkbox2).toBeSelected();

        await CheckboxPage.checkbox1.click();
        await CheckboxPage.checkbox2.click();

        await expect(CheckboxPage.checkbox1).toBeSelected();
        await expect(CheckboxPage.checkbox2).not.toBeSelected();
    })
})
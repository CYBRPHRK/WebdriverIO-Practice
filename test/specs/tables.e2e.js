import { expect } from '@wdio/globals'
import TablesPage from '../pageobjects/tables.page.js'

describe('My Tables application', () => {
    it('should load successfully', async () => {
        await TablesPage.open()

        await expect(TablesPage.header(1, 1)).toHaveText('Last Name')
        await expect(TablesPage.header(1, 2)).toHaveText('First Name')
        await expect(TablesPage.header(1, 3)).toHaveText('Email')
        await expect(TablesPage.header(1, 4)).toHaveText('Due')
        await expect(TablesPage.header(1, 5)).toHaveText('Web Site')
        await expect(TablesPage.header(1, 6)).toHaveText('Action')
        await expect(TablesPage.data(1, 1, 1)).toHaveText('Smith')
        await expect(TablesPage.data(1, 1, 2)).toHaveText('John')
        await expect(TablesPage.data(1, 1, 3)).toHaveText('jsmith@gmail.com')
        await expect(TablesPage.data(1, 1, 4)).toHaveText('$50.00')
        await expect(TablesPage.data(1, 1, 5)).toHaveText('http://www.jsmith.com')
        await expect(TablesPage.data(1, 1, 6)).toHaveText('edit delete')
        await expect(TablesPage.data(1, 2, 1)).toHaveText('Bach')
        await expect(TablesPage.data(1, 2, 2)).toHaveText('Frank')
        await expect(TablesPage.data(1, 2, 3)).toHaveText('fbach@yahoo.com')
        await expect(TablesPage.data(1, 2, 4)).toHaveText('$51.00')
        await expect(TablesPage.data(1, 2, 5)).toHaveText('http://www.frank.com')
        await expect(TablesPage.data(1, 2, 6)).toHaveText('edit delete')
        await expect(TablesPage.data(1, 3, 1)).toHaveText('Doe')
        await expect(TablesPage.data(1, 3, 2)).toHaveText('Jason')
        await expect(TablesPage.data(1, 3, 3)).toHaveText('jdoe@hotmail.com')
        await expect(TablesPage.data(1, 3, 4)).toHaveText('$100.00')
        await expect(TablesPage.data(1, 3, 5)).toHaveText('http://www.jdoe.com')
        await expect(TablesPage.data(1, 3, 6)).toHaveText('edit delete')
        await expect(TablesPage.data(1, 4, 1)).toHaveText('Conway')
        await expect(TablesPage.data(1, 4, 2)).toHaveText('Tim')
        await expect(TablesPage.data(1, 4, 3)).toHaveText('tconway@earthlink.net')
        await expect(TablesPage.data(1, 4, 4)).toHaveText('$50.00')
        await expect(TablesPage.data(1, 4, 5)).toHaveText('http://www.timconway.com')
        await expect(TablesPage.data(1, 4, 6)).toHaveText('edit delete')

        await expect(TablesPage.header(2, 1)).toHaveText('Last Name')
        await expect(TablesPage.header(2, 2)).toHaveText('First Name')
        await expect(TablesPage.header(2, 3)).toHaveText('Email')
        await expect(TablesPage.header(2, 4)).toHaveText('Due')
        await expect(TablesPage.header(2, 5)).toHaveText('Web Site')
        await expect(TablesPage.header(2, 6)).toHaveText('Action')

        await expect(TablesPage.data(2, 1, 1)).toHaveText('Smith')
        await expect(TablesPage.data(2, 1, 2)).toHaveText('John')
        await expect(TablesPage.data(2, 1, 3)).toHaveText('jsmith@gmail.com')
        await expect(TablesPage.data(2, 1, 4)).toHaveText('$50.00')
        await expect(TablesPage.data(2, 1, 5)).toHaveText('http://www.jsmith.com')
        await expect(TablesPage.data(2, 1, 6)).toHaveText('edit delete')
        await expect(TablesPage.data(2, 2, 1)).toHaveText('Bach')
        await expect(TablesPage.data(2, 2, 2)).toHaveText('Frank')
        await expect(TablesPage.data(2, 2, 3)).toHaveText('fbach@yahoo.com')
        await expect(TablesPage.data(2, 2, 4)).toHaveText('$51.00')
        await expect(TablesPage.data(2, 2, 5)).toHaveText('http://www.frank.com')
        await expect(TablesPage.data(2, 2, 6)).toHaveText('edit delete')
        await expect(TablesPage.data(2, 3, 1)).toHaveText('Doe')
        await expect(TablesPage.data(2, 3, 2)).toHaveText('Jason')
        await expect(TablesPage.data(2, 3, 3)).toHaveText('jdoe@hotmail.com')
        await expect(TablesPage.data(2, 3, 4)).toHaveText('$100.00')
        await expect(TablesPage.data(2, 3, 5)).toHaveText('http://www.jdoe.com')
        await expect(TablesPage.data(2, 3, 6)).toHaveText('edit delete')
        await expect(TablesPage.data(2, 4, 1)).toHaveText('Conway')
        await expect(TablesPage.data(2, 4, 2)).toHaveText('Tim')
        await expect(TablesPage.data(2, 4, 3)).toHaveText('tconway@earthlink.net')
        await expect(TablesPage.data(2, 4, 4)).toHaveText('$50.00')
        await expect(TablesPage.data(2, 4, 5)).toHaveText('http://www.timconway.com')
        await expect(TablesPage.data(2, 4, 6)).toHaveText('edit delete')

        await TablesPage.header(1, 1).click()
        await expect(TablesPage.data(1, 1, 1)).toHaveText('Bach')

        await TablesPage.header(1, 1).click()
        await expect(TablesPage.data(1, 1, 1)).toHaveText('Smith')
        
        await TablesPage.header(1, 2).click()
        await expect(TablesPage.data(1, 1, 2)).toHaveText('Frank')

        await TablesPage.header(1, 2).click()
        await expect(TablesPage.data(1, 1, 2)).toHaveText('Tim')

        await TablesPage.header(1, 3).click()
        await expect(TablesPage.data(1, 1, 3)).toHaveText('fbach@yahoo.com')

        await TablesPage.header(1, 3).click()
        await expect(TablesPage.data(1, 1, 3)).toHaveText('tconway@earthlink.net')

        await TablesPage.header(1, 4).click()
        await expect(TablesPage.data(1, 1, 4)).toHaveText('$50.00')

        await TablesPage.header(1, 4).click()
        await expect(TablesPage.data(1, 1, 4)).toHaveText('$100.00')

        await TablesPage.header(1, 5).click()
        await expect(TablesPage.data(1, 1, 5)).toHaveText('http://www.frank.com')

        await TablesPage.header(1, 5).click()
        await expect(TablesPage.data(1, 1, 5)).toHaveText('http://www.timconway.com')

        await TablesPage.header(2, 1).click()
        await expect(TablesPage.data(2, 1, 1)).toHaveText('Bach')

        await TablesPage.header(2, 1).click()
        await expect(TablesPage.data(2, 1, 1)).toHaveText('Smith')
        
        await TablesPage.header(2, 2).click()
        await expect(TablesPage.data(2, 1, 2)).toHaveText('Frank')

        await TablesPage.header(2, 2).click()
        await expect(TablesPage.data(2, 1, 2)).toHaveText('Tim')

        await TablesPage.header(2, 3).click()
        await expect(TablesPage.data(2, 1, 3)).toHaveText('fbach@yahoo.com')

        await TablesPage.header(2, 3).click()
        await expect(TablesPage.data(2, 1, 3)).toHaveText('tconway@earthlink.net')

        await TablesPage.header(2, 4).click()
        await expect(TablesPage.data(2, 1, 4)).toHaveText('$50.00')

        await TablesPage.header(2, 4).click()
        await expect(TablesPage.data(2, 1, 4)).toHaveText('$100.00')

        await TablesPage.header(2, 5).click()
        await expect(TablesPage.data(2, 1, 5)).toHaveText('http://www.frank.com')

        await TablesPage.header(2, 5).click()
        await expect(TablesPage.data(2, 1, 5)).toHaveText('http://www.timconway.com')
    })
})
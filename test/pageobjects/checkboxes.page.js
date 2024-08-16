import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckboxPage extends Page {
    /**
     * define selectors using getter methods
     */
    get header () {
        return $('h3');
    }

    get checkbox1 () {
        return $('//*[@id="checkboxes"]/input[1]');
    }

    get checkbox2 () {
        return $('//*[@id="checkboxes"]/input[2]');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('checkboxes');
    }
}

export default new CheckboxPage();
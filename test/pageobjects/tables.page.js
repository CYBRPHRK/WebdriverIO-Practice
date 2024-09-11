import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TablesPage extends Page {
    /**
     * define selectors using getter methods
     */
    get table1(){
        return $('//*[@id="table1"]');
    }

    get table2(){
        return $('//*[@id="table2"]');
    }

    tablerow (table, rowNum) {
        !rowNum ? rowNum = 1 : rowNum
        
        if (table == 1){
            return this.table1.$(`tbody tr:nth-child(${rowNum})`);
        }
        else if (table == 2){
            return this.table2.$(`tbody tr:nth-child(${rowNum})`);
        }
    }

    data(table, row, col){
        return this.tablerow(table, row).$(`td:nth-child(${col})`);
    }

    header(table, col){
        if (table == 1){
            return this.table1.$(`thead th:nth-child(${col})`);
        }
        else if (table == 2){
            return this.table2.$(`thead th:nth-child(${col})`);
        }
        
    }

    open () {
        return super.open('tables');
    }
}

export default new TablesPage();
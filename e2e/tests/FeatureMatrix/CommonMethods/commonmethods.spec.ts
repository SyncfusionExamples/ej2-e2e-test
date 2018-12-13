import { browser, element, By, protractor, by, ElementFinder } from "@syncfusion/ej2-base/e2e/index"

export class CommonMethods {

    public enableAllFeatures() {
        //allow grouping    
        element(By.xpath("//strong[text()='allowGrouping']/following::input[1]")).click();
        //allow filtering
        element(By.xpath("//strong[text()='allowFiltering']/following::input[1]")).click();
        //allow paging
        element(By.xpath("//strong[text()='allowPaging']/following::input[1]")).click();
        //allow Sorting
        element(By.xpath("//strong[text()='allowSorting']/following::input[1]")).click();
        //allow Reorder
        element(By.xpath("//strong[text()='allowReordering']/following::input[1]")).click();
        //allow Resize
        element(By.xpath("//strong[text()='allowResizing']/following::input[1]")).click();
        //allow Exporting
        element(By.xpath("//strong[text()='allowExcelExport']/following::input[1]")).click();
        element(By.xpath("//strong[text()='allowPdfExport']/following::input[1]")).click();
        //enableContextMenuOption
        element(By.xpath("//strong[text()='contextMenuItems']//following::input[@value='AutoFit'][1]")).click();
        element(By.xpath("//strong[text()='contextMenuItems']//following::input[@value='AutoFitAll'][1]")).click();
        element(By.xpath("//strong[text()='contextMenuItems']//following::input[@value='SortAscending'][1]")).click();
        element(By.xpath("//strong[text()='contextMenuItems']//following::input[@value='SortDescending'][1]")).click();
        element(By.xpath("//strong[text()='contextMenuItems']//following::input[@value='Copy'][1]")).click();
        element(By.xpath("//strong[text()='contextMenuItems']//following::input[@value='Edit'][1]")).click();
        element(By.xpath("//strong[text()='contextMenuItems']//following::input[@value='Delete'][1]")).click();
        element(By.xpath("//strong[text()='contextMenuItems']//following::input[@value='Save'][1]")).click();
        element(By.xpath("//strong[text()='contextMenuItems']//following::input[@value='Cancel'][1]")).click();
        element(By.xpath("//strong[text()='contextMenuItems']//following::input[@value='PdfExport'][1]")).click();
        element(By.xpath("//strong[text()='contextMenuItems']//following::input[@value='ExcelExport'][1]")).click();
        element(By.xpath("//strong[text()='contextMenuItems']//following::input[@value='CsvExport'][1]")).click();
        element(By.xpath("//strong[text()='contextMenuItems']//following::input[@value='FirstPage'][1]")).click();
        element(By.xpath("//strong[text()='contextMenuItems']//following::input[@value='PrevPage'][1]")).click();
        element(By.xpath("//strong[text()='contextMenuItems']//following::input[@value='LastPage'][1]")).click();
        element(By.xpath("//strong[text()='contextMenuItems']//following::input[@value='NextPage'][1]")).click();
        //Enable ColumnChooser
        element(By.xpath("//strong[text()='showColumnChooser']/following::input[1]")).click();
        element(By.xpath("//strong[text()='toolbar']//following::label[contains(text(),'ColumnChooser')]")).click();
        //allow Editing
        element(By.xpath("//strong[text()='allowAdding']//following::input[1]")).click();
        element(By.xpath("//strong[text()='allowAdding']//following::input[2]")).click();
        element(By.xpath("//strong[text()='allowAdding']//following::input[4]")).click();
        element(By.xpath("//strong[text()='allowAdding']//following::input[6]")).click();
        element(By.xpath("//strong[text()='editSettings:']//following::button[1]")).click();
    }

    public enableColumnMenu() {
        //show Column menu
        element(By.xpath("//strong[text()='showColumnMenu']/following::input[1]")).click();
        //column menu option
        element(By.xpath("//strong[text()='showColumnMenu']//following::input[@value='SortAscending'][1]")).click();
        element(By.xpath("//strong[text()='showColumnMenu']//following::input[@value='SortDescending'][1]")).click();
        element(By.xpath("//strong[text()='showColumnMenu']//following::input[@value='Group'][1]")).click();
        element(By.xpath("//strong[text()='showColumnMenu']//following::input[@value='Ungroup'][1]")).click();
        element(By.xpath("//strong[text()='showColumnMenu']//following::input[@value='AutoFit'][1]")).click();
        element(By.xpath("//strong[text()='showColumnMenu']//following::input[@value='AutoFitAll'][1]")).click();
        element(By.xpath("//strong[text()='showColumnMenu']//following::input[@value='ColumnChooser'][1]")).click();
        element(By.xpath("//strong[text()='showColumnMenu']//following::input[@value='Filter'][1]")).click();
    }

    public Errorfinder() {
        var findclass = browser.executeScript("return document.getElementsByClassName('e-errorfinder').length");
        findclass.then(function (err: any) {
            if (err > 0) {
                var errorMesg = browser.executeScript("return document.getElementsByClassName('e-errorfinder')[0].innerText");
                errorMesg.then(function (msg: any) {
                    fail('Following Script Error throws' + msg);
                })
            }
        })
    }

    public Grouping(ColumnXpath: string) {
        var drag = element(By.xpath(ColumnXpath));
        var drop = element(By.className("e-groupdroparea"));
        browser.actions().mouseDown(drag).perform();
        browser.actions().mouseMove({ x: 5, y: 5 }).perform();
        browser.actions().mouseMove(drop).perform();
        browser.actions().mouseUp().perform();
    }

    public UnGrouping(Drag: string) {
        var drag = element(By.className(Drag));
        var drop = element(By.className("e-groupcaption"));
        browser.actions().mouseDown(drag).perform();
        browser.actions().mouseMove({ x: 5, y: 5 }).perform();
        browser.actions().mouseMove(drop).perform();
        browser.actions().mouseUp().perform();
    }

    public Reorder(Column1: string, Column2: string) {
        var drag = element(By.xpath(Column1));
        var drop = element(By.xpath(Column2));
        browser.actions().mouseDown(drag).perform();
        browser.actions().mouseMove({ x: 5, y: 5 }).perform();
        browser.actions().mouseMove(drop).perform();
        browser.actions().mouseUp().perform();
    }

    public ReSize(Column1: string) {
        var drag = element(By.xpath(Column1));
        browser.actions().mouseDown(drag).perform();
        browser.actions().mouseMove({ x: 10, y: 0 }).perform();
        browser.actions().mouseUp().perform();
    }

    public disableSelection() {
        element(By.xpath("//strong[text()='allowSelection']/following::input[1]")).click();
    }

    public EnableEditIcons() {
        element(By.xpath("//strong[text()='toolbar']//following::label[contains(text(),'Add')]")).click();
        element(By.xpath("//strong[text()='toolbar']//following::label[contains(text(),'Edit')]")).click();
        element(By.xpath("//strong[text()='toolbar']//following::label[contains(text(),'Update')]")).click();
        element(By.xpath("//strong[text()='toolbar']//following::label[contains(text(),'Cancel')]")).click();
        element(By.xpath("//strong[text()='toolbar']//following::label[contains(text(),'Delete')]")).click();
    }
    public groupingValidation(GroupedLength: number) {
        var GroupedLength1: any = browser.executeScript("return document.getElementsByClassName('e-groupheadercell').length");
        expect(GroupedLength).toEqual(GroupedLength1);
    }

    public pagingValidation(currentPage: number) {
        var currentPage1: any = browser.executeScript("return document.getElementById('Grid').ej2_instances[0].pageSettings.currentPage");
        expect(currentPage).toEqual(currentPage1);
    }

    public enableExportIcons() {
        element(By.xpath("//strong[text()='toolbar']//following::label[contains(text(),'ExcelExport')]")).click();
        element(By.xpath("//strong[text()='toolbar']//following::label[contains(text(),'PdfExport')]")).click();
        element(By.xpath("//strong[text()='toolbar']//following::label[contains(text(),'CsvExport')]")).click();
    }

    public equalFilterValidation(filteringValue: any, ColumnName: string) {
        let recordsLength: any = browser.executeScript("return document.getElementById('Grid').ej2_instances[0].getCurrentViewRecords().length");
        for (let i: number = 0; i < recordsLength; i++) {
            let filteredRecords: any = browser.executeScript("return document.getElementById('Grid').ej2_instances[0].currentViewData[" + i + "]." + ColumnName + "");
            expect(filteringValue).toEqual(filteredRecords);
        }
    }

    public enableEditIcons(){
        element(By.xpath("//strong[text()='toolbar']//following::label[contains(text(),'Add')]")).click();
        element(By.xpath("//strong[text()='toolbar']//following::label[contains(text(),'Edit')]")).click();
        element(By.xpath("//strong[text()='toolbar']//following::label[contains(text(),'Update')]")).click();
        element(By.xpath("//strong[text()='toolbar']//following::label[contains(text(),'Cancel')]")).click();
        element(By.xpath("//strong[text()='toolbar']//following::label[contains(text(),'Delete')]")).click();
    }

    public enableDialogEditing(){
        element(By.xpath("//option[text()='Dialog']")).click();
        element(By.xpath("//strong[text()='editSettings:']//following::button[1]")).click();
        element(By.xpath("//strong[text()='toolbar']//following::label[contains(text(),'Add')]")).click();
        element(By.xpath("//strong[text()='toolbar']//following::label[contains(text(),'Edit')]")).click();
        element(By.xpath("//strong[text()='toolbar']//following::label[contains(text(),'Delete')]")).click();
    }

    public enableBatchEditing(){
        element(By.xpath("//option[text()='Batch']")).click();
        element(By.xpath("//strong[text()='editSettings:']//following::button[1]")).click();
        element(By.xpath("//strong[text()='toolbar']//following::label[contains(text(),'Add')]")).click();
        element(By.xpath("//strong[text()='toolbar']//following::label[contains(text(),'Update')]")).click();
        element(By.xpath("//strong[text()='toolbar']//following::label[contains(text(),'Delete')]")).click();
        element(By.xpath("//strong[text()='toolbar']//following::label[contains(text(),'Cancel')]")).click();
    }

    public selectionValidation(expectedselectedRecord : number){
        var selectedRecords:any = browser.executeScript("return document.getElementById('Grid').ej2_instances[0].getSelectedRecords().length");
        expect(selectedRecords).toEqual(expectedselectedRecord,"Records are not selected");
    }

    public searchingValidation(searchedValue : any, columnName : string){
        var recordsCount = browser.executeScript("return document.getElementById('Grid').ej2_instances[0].getCurrentViewRecords().length");
        recordsCount.then(function(size){
        for (let i:number = 0; i< size; i++)
        {
            var filteredRecords = browser.executeScript("return document.getElementById('Grid').ej2_instances[0].currentViewData[" + i + "]." + columnName + "");
            expect(filteredRecords).toContain(searchedValue);
        }
       });
    }
}


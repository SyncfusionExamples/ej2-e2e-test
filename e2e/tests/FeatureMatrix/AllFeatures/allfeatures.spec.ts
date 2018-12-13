import { browser, element, By, by, protractor, ElementFinder, Key } from "@syncfusion/ej2-base/e2e/index"
import { CommonMethods } from "../CommonMethods/commonmethods.spec";
let helper = new CommonMethods();

if (browser.isDesktop === true) {
    browser.driver.manage().window().setSize(1600, 1200);
}
let EC = protractor.ExpectedConditions;
describe("Grid All Feature combination", () => {
    browser.manage().window().setPosition(0, 0);
    it("AllFeatures-001:Enable All features and Open Addform", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //click on add button
        element(By.id("Grid_add")).click();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-001", done);
    })

    it("AllFeatures-002:Enable All features Open Addform check form validation", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //click on add button
        element(By.id("Grid_add")).click();
        //click on save button
        element(By.id("Grid_update")).click();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-002", done);
    })

    it("AllFeatures-003:Enable All features and Open Dialog Addform", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Dialog editing
        element(By.xpath("//strong[text()='editSettings:']//following::select[1]")).click();
        element(By.xpath("//option[text()='Dialog']")).click();
        //click on Apply button
        element(By.xpath("//strong[text()='editSettings:']//following::button[1]")).click();
        //Enable Edit icons
        helper.EnableEditIcons();
        //click on add button
        element(By.id("Grid_add")).click();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-003", done);
    })

    it("AllFeatures-004:Enable All features Open Dialog Addform check form validation", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Dialog editing
        element(By.xpath("//strong[text()='editSettings:']//following::select[1]")).click();
        element(By.xpath("//option[text()='Dialog']")).click();
        //click on Apply button
        element(By.xpath("//strong[text()='editSettings:']//following::button[1]")).click();
        //Enable Edit icons
        helper.EnableEditIcons();
        //click on add button
        element(By.id("Grid_add")).click();
        //click on save button
        element(By.xpath("//div[@id='Grid_dialogEdit_wrapper']//following::button[text()='Save']")).click();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-004", done);
    })

    

    it("AllFeatures-006:Enable All features Open Batch Addform check form validation", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Batch editing
        element(By.xpath("//strong[text()='editSettings:']//following::select[1]")).click();
        element(By.xpath("//option[text()='Batch']")).click();
        //click on Apply button
        element(By.xpath("//strong[text()='editSettings:']//following::button[1]")).click();
        //Enable Edit icons
        helper.EnableEditIcons();
        //click on add button
        element(By.id("Grid_add")).click();
        //click on save button
        element(By.id("Grid_update")).click();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-006", done);
    })

    it("AllFeatures-007:Enable All features and Edit a record", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Edit a first record
        browser.actions().doubleClick(element(By.xpath("(//table[@id='Grid_content_table']//following::tr[1]/td[1])[1]"))).perform();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-007", done);
    })

    it("AllFeatures-008:Enable All features and Dialog edit record", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Dialog editing
        element(By.xpath("//strong[text()='editSettings:']//following::select[1]")).click();
        element(By.xpath("//option[text()='Dialog']")).click();
        //click on Apply button
        element(By.xpath("//strong[text()='editSettings:']//following::button[1]")).click();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Edit a first record
        browser.actions().doubleClick(element(By.xpath("(//table[@id='Grid_content_table']//following::tr[1]/td[1])[1]"))).perform();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-008", done);
    })

    it("AllFeatures-009:Enable All features and Batch edit record", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Batch editing
        element(By.xpath("//strong[text()='editSettings:']//following::select[1]")).click();
        element(By.xpath("//option[text()='Batch']")).click();
        //click on Apply button
        element(By.xpath("//strong[text()='editSettings:']//following::button[1]")).click();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Edit a first record
        browser.actions().doubleClick(element(By.xpath("(//table[@id='Grid_content_table']//following::tr[1]/td[2])[1]"))).perform();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-009", done);
    })

    it("AllFeatures-010:Enable All features and Group All columns", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //group All column
        //Group Order id column
        helper.Grouping("//div[@e-mappinguid='grid-column0']");
        //Group Employee id column
        helper.Grouping("//div[@e-mappinguid='grid-column1']");
        //Group Freight column
        helper.Grouping("//div[@e-mappinguid='grid-column2']");
        //Group Ship name column
        helper.Grouping("//div[@e-mappinguid='grid-column3']");
        //Group Order date column
        helper.Grouping("//div[@e-mappinguid='grid-column4']");
        //Group ship Country column
        helper.Grouping("//div[@e-mappinguid='grid-column5']");
        //Group Verified column
        helper.Grouping("//div[@e-mappinguid='grid-column6']");
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-010", done);
    })

    it("AllFeatures-011:Enable All features and Sort All columns", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Sort All column
        browser.actions().keyDown(Key.CONTROL).perform();
        element(By.xpath("//div[@e-mappinguid='grid-column0']")).click();
        element(By.xpath("//div[@e-mappinguid='grid-column1']")).click();
        element(By.xpath("//div[@e-mappinguid='grid-column2']")).click();
        element(By.xpath("//div[@e-mappinguid='grid-column3']")).click();
        element(By.xpath("//div[@e-mappinguid='grid-column4']")).click();
        element(By.xpath("//div[@e-mappinguid='grid-column5']")).click();
        element(By.xpath("//div[@e-mappinguid='grid-column6']")).click();
        browser.actions().keyUp(Key.CONTROL).perform();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-011", done);
    })

    it("AllFeatures-012:Enable All features and reorder order date and ship name columns", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Reorder order date and ship name
        helper.Reorder("//div[@e-mappinguid='grid-column4']", "//div[@e-mappinguid='grid-column3']");
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-012", done);
    })

    it("AllFeatures-013:Enable All features and Resize order date column", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Resize order date column
        helper.ReSize("(//div[@e-mappinguid='grid-column4']//following::div[contains(@class,'e-rhandler')])[1]");
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-013", done);
    })

    it("AllFeatures-014:Enable All features and move to last page", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //navigate to last page
        element(By.className("e-lastpage")).click();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-014", done);
    })

    it("AllFeatures-015:Enable All features and move to next page", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //navigate to last page
        element(By.className("e-nextpage")).click();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-015", done);
    })

    it("AllFeatures-016:Enable All features and Filter Order Date column", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Filter order Date column
        element(By.id("OrderDate_filterBarcell")).sendKeys("3/13/1998" + Key.ENTER);
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-016", done);
    })

    it("AllFeatures-017:Enable All features and Filter Ship Country column", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Filter Ship Country column
        element(By.id("ShipCountry_filterBarcell")).sendKeys("Brazil" + Key.ENTER);
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-017", done);
    })

    it("AllFeatures-018:Enable All features and Filter Verified column", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Filter Ship Country column
        element(By.id("Verified_filterBarcell")).sendKeys("true" + Key.ENTER);
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-018", done);
    })

    it("AllFeatures-019:Enable All features and Open Context menu on Header", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Context menu on Employee Id column
        var EmployeeID = element(By.xpath("//div[@e-mappinguid='grid-column1']"));
        browser.actions().mouseMove(EmployeeID).click(protractor.Button.RIGHT).perform();
        //validation
        var ContextMenu: any = element(By.id("Grid_cmenu"));
        expect(ContextMenu.isPresent()).toBe(true);
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-019", done);
    })

    it("AllFeatures-020:Enable All features and Open Context menu on Header and click on autofit all", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Context menu on Employee Id column
        var EmployeeID = element(By.xpath("//div[@e-mappinguid='grid-column1']"));
        browser.actions().mouseMove(EmployeeID).click(protractor.Button.RIGHT).perform();
        //click on AutoFit
        element(by.id("Grid_cmenu_AutoFitAll")).click();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-020", done);
    })

    it("AllFeatures-021:Enable All features and Open Context menu Sort employee ID", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Context menu on Employee Id column
        var EmployeeID = element(By.xpath("//div[@e-mappinguid='grid-column1']"));
        browser.actions().mouseMove(EmployeeID).click(protractor.Button.RIGHT).perform();
        //click on sorting
        element(by.id("Grid_cmenu_SortAscending")).click();
        //validation
        var Sorting: any = element(By.xpath("//div[@e-mappinguid='grid-column1']//parent::th")).getAttribute("aria-sort");
        expect("Ascending").toEqual(Sorting);
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-021", done);
    })

    it("AllFeatures-022:Enable All features and Open Context menu On Records", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Context menu on 5th record
        var EmployeeID = element(By.xpath("//table[@id='Grid_content_table']//following::tr[5]//td[4]"));
        browser.actions().mouseMove(EmployeeID).click(protractor.Button.RIGHT).perform();
        //validation
        var ContextMenu: any = element(By.id("Grid_cmenu"));
        expect(ContextMenu.isPresent()).toBe(true);
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-022", done);
    })

    it("AllFeatures-023:Enable All features and Open Context menu and select edit record", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Context menu on 5th record
        var Record = element(By.xpath("(//table[@id='Grid_content_table']//following::tr[5]/td[4])[1]"));
        browser.actions().mouseMove(Record).perform();
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.sleep(50);
        //select Edit Record
        element(By.id("Grid_cmenu_Edit")).click();
        var EditForm = element(By.id("GridEditForm"));
        browser.sleep(50);
        //validation
        expect(EditForm.isDisplayed()).toBeTruthy();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-023", done);
    })

    it("AllFeatures-024:Enable All features and Open Context menu and select Dialog edit record", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Dialog editing
        element(By.xpath("//strong[text()='editSettings:']//following::select[1]")).click();
        element(By.xpath("//option[text()='Dialog']")).click();
        //click on Apply button
        element(By.xpath("//strong[text()='editSettings:']//following::button[1]")).click();
        //Enable Edit icons
        helper.EnableEditIcons();
        browser.sleep(100);
        //Open Context menu on 5th record
        var Record = element(By.xpath("(//table[@id='Grid_content_table']//following::tr[5]/td[4])[1]"));
        browser.actions().mouseMove(Record).perform();
        browser.actions().click(protractor.Button.RIGHT).perform();
        //select Edit Record
        element(By.id("Grid_cmenu_Edit")).click();
        var DialogEdit: any = element(By.id("Grid_dialogEdit_wrapper"));
        //validation
        expect(DialogEdit.isDisplayed()).toBeTruthy();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-024", done);
    })

    it("AllFeatures-025:Enable All features and Open Context menu and select Batch edit record", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Batch editing
        element(By.xpath("//strong[text()='editSettings:']//following::select[1]")).click();
        element(By.xpath("//option[text()='Batch']")).click();
        //click on Apply button
        element(By.xpath("//strong[text()='editSettings:']//following::button[1]")).click();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Context menu on 5th record
        var Record = element(By.xpath("(//table[@id='Grid_content_table']//following::tr[5]/td[4])[1]"));
        browser.actions().mouseMove(Record).perform();
        browser.actions().click(protractor.Button.RIGHT).perform();
        //select Edit Record
        element(By.id("Grid_cmenu_Edit")).click();
        var EditForm = element(By.id("GridEditForm"));
        //validation
        expect(EditForm.isDisplayed()).toBeTruthy();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-025", done);
    })

    it("AllFeatures-026:Enable All features and Open Context menu of Normal edit Save and cancel", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Context menu on 5th record
        var Record = element(By.xpath("(//table[@id='Grid_content_table']//following::tr[5]/td[4])[1]"));
        browser.actions().mouseMove(Record).perform();
        browser.actions().click(protractor.Button.RIGHT).perform();
        //select Edit Record
        element(By.id("Grid_cmenu_Edit")).click();
        var EditForm = element(By.id("GridEditForm"));
        //open context menu on edit record
        browser.actions().mouseMove(EditForm).perform();
        browser.actions().click(protractor.Button.RIGHT).perform();
        //validation
        expect(EditForm.isDisplayed()).toBeTruthy();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-026", done);
    })

   

    

    it("AllFeatures-029:Enable All features and Open Context menu and Batch edit click on save", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Batch editing
        element(By.xpath("//strong[text()='editSettings:']//following::select[1]")).click();
        element(By.xpath("//option[text()='Batch']")).click();
        //click on Apply button
        element(By.xpath("//strong[text()='editSettings:']//following::button[1]")).click();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Context menu on 5th record
        var Record = element(By.xpath("(//table[@id='Grid_content_table']//following::tr[5]/td[4])[1]"));
        browser.actions().mouseMove(Record).perform();
        browser.actions().click(protractor.Button.RIGHT).perform();
        //select Edit Record
        element(By.id("Grid_cmenu_Edit")).click();
        var EditForm: any = element(By.id("GridEditForm"));
        //open context menu on edit record
        browser.actions().mouseMove(EditForm).perform();
        browser.actions().click(protractor.Button.RIGHT).perform();
        //select Save option
        element(By.id("Grid_cmenu_Save")).click();
        //validation
        browser.wait(EC.stalenessOf(EditForm), 10);
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-029", done);
    })

    it("AllFeatures-030:Enable All features and Open Context menu On pager", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Context On pager
        var Pager = element(By.className("e-gridpager"));
        browser.actions().mouseMove(Pager).perform();
        browser.actions().click(protractor.Button.RIGHT).perform();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-030", done);
    })

    it("AllFeatures-031:Enable All features and Open Context menu Click on next page", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Context On pager
        var Pager = element(By.className("e-gridpager"));
        browser.actions().mouseMove(Pager).perform();
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.sleep(100);
        //Click on next page
        element(By.id("Grid_cmenu_NextPage")).click();
        browser.sleep(200);
        //again open context menu
        browser.actions().mouseMove(Pager).perform();
        browser.actions().click(protractor.Button.RIGHT).perform();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-031", done);
    })

    it("AllFeatures-032:Enable All features and Open Context menu Click on Last page", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Context On pager
        var Pager = element(By.className("e-gridpager"));
        browser.actions().mouseMove(Pager).perform();
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.sleep(100);
        //Click on next page
        element(By.id("Grid_cmenu_LastPage")).click();
        browser.sleep(200);
        //again open context menu
        browser.actions().mouseMove(Pager).perform();
        browser.actions().click(protractor.Button.RIGHT).perform();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-032", done);
    })

    it("AllFeatures-033:Enable All features and Open Column Chooser", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Column Chooser
        element(By.id("Grid_columnchooser")).click();
        //validation
        var ColumnChosser: any = element(By.id("Grid_ccdlg_dialog-content"));
        expect(ColumnChosser.isPresent()).toBe(true);
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-033", done);
    })

    it("AllFeatures-034:Enable All features and Open Column Chooser and close it", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Column Chooser
        element(By.id("Grid_columnchooser")).click();
        //click on column chosser cancel button
        element(By.className("e-cc-cnbtn")).click();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-034", done);
    })

    it("AllFeatures-035:Enable All features and Open Column Chooser and hide Order ID", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Column Chooser
        element(By.id("Grid_columnchooser")).click();
        //uncheck orderid
        element(By.xpath("//span[@class='e-label'][text()='Order ID']")).click();
        //click on column chosser cancel button
        element(By.className("e-cc_okbtn")).click();
        //validation
        var OrderId: any = browser.executeScript("return document.getElementById('Grid').ej2_instances[0].columns[0].visible");
        expect(false).toEqual(OrderId);
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-035", done);
    })

    it("AllFeatures-036:Enable All features and Open Column Menu for Order ID", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Column menu
        element(By.xpath("(//div[contains(@class,'e-columnmenu')])[1]")).click();
        //validation
        var ColumnMenu: any = element(By.id("Grid_columnmenu"));
        expect(ColumnMenu.isPresent()).toBe(true);
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-036", done);
    })

    it("AllFeatures-037:Enable All features and Open Column Menu for Order Date", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Column menu
        element(By.xpath("(//div[contains(@class,'e-columnmenu')])[5]")).click();
        //validation
        var ColumnMenu: any = element(By.id("Grid_columnmenu"));
        expect(ColumnMenu.isPresent()).toBe(true);
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-037", done);
    })

    it("AllFeatures-038:Enable All features and Open Column Menu column chooser", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Column menu
        element(By.xpath("(//div[contains(@class,'e-columnmenu')])[5]")).click();
        browser.sleep(100);
        //select Group option
        element(By.id("Grid_colmenu_Group")).click();
        //open column chooser 
        element(By.xpath("(//div[contains(@class,'e-columnmenu')])[6]")).click();
        element(By.id("Grid_colmenu_ColumnChooser")).click();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-038", done);
    })

    it("AllFeatures-039:Enable All features and Open Column Menu and Sort Freight", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Column menu
        element(By.xpath("(//div[contains(@class,'e-columnmenu')])[3]")).click();
        //select sort descending
        element(By.id("Grid_colmenu_SortDescending")).click();
        browser.sleep(100);
        //validation
        var Sorting: any = element(By.xpath("//div[@e-mappinguid='grid-column2']//parent::th")).getAttribute("aria-sort");
        expect("Descending").toEqual(Sorting);
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-039", done);
    })

    

    it("AllFeatures-041:Enable All features and Open Column Menu and Open OrderDate colum Filter menu", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //enable Menu filter
        element(By.xpath("//strong[text()='filterSettings:']//following::select[2]")).click();
        element(By.xpath("//option[text()='Menu']")).click();
        element(By.xpath("//strong[text()='filterSettings:']//following::button[1]")).click();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Column menu for orderdate column
        element(By.xpath("(//div[contains(@class,'e-columnmenu')])[5]")).click();
        browser.sleep(50);
        //select Filter
        element(By.id("Grid_colmenu_Filter")).click();
        browser.sleep(50);
        //open date picker
        element(By.className("e-date-icon")).click();
        browser.sleep(50);
        //validation
        expect(element(By.className("e-calendar")).isDisplayed()).toBeTruthy();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-041", done);
    })

    it("AllFeatures-042:Enable All features and Open Column Menu and Open Ship name column Filter menu", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //enable Menu filter
        element(By.xpath("//strong[text()='filterSettings:']//following::select[2]")).click();
        element(By.xpath("//option[text()='Menu']")).click();
        element(By.xpath("//strong[text()='filterSettings:']//following::button[1]")).click();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Column menu for ShipName column
        element(By.xpath("(//div[contains(@class,'e-columnmenu')])[4]")).click();
        //select Filter
        element(By.id("Grid_colmenu_Filter")).click();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-042", done);
    })

    it("AllFeatures-043:Enable All features and Open Column Menu and Open Freight column Filter menu", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //enable Menu filter
        element(By.xpath("//strong[text()='filterSettings:']//following::select[2]")).click();
        element(By.xpath("//option[text()='Menu']")).click();
        element(By.xpath("//strong[text()='filterSettings:']//following::button[1]")).click();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Column menu for Freight column
        element(By.xpath("(//div[contains(@class,'e-columnmenu')])[3]")).click();
        //select Filter
        element(By.id("Grid_colmenu_Filter")).click();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-043", done);
    })

    it("AllFeatures-044:Enable All features and Open Column Menu and Open Verified column Filter menu", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //enable Menu filter
        element(By.xpath("//strong[text()='filterSettings:']//following::select[2]")).click();
        element(By.xpath("//option[text()='Menu']")).click();
        element(By.xpath("//strong[text()='filterSettings:']//following::button[1]")).click();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Column menu for Verified column
        element(By.xpath("(//div[contains(@class,'e-columnmenu')])[7]")).click();
        //select Filter
        element(By.id("Grid_colmenu_Filter")).click();
        //open Dropdown
        element(By.xpath("(//span[contains(@class,'e-ddl-icon')])[2]")).click();
        //validation
        expect(element(By.className("e-dropdownbase")).isDisplayed()).toBeTruthy();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-044", done);
    })

    

   

    it("AllFeatures-047:Enable All features and Open Column Menu and Filter Freight column Filter menu", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //enable Menu filter
        element(By.xpath("//strong[text()='filterSettings:']//following::select[2]")).click();
        element(By.xpath("//option[text()='Menu']")).click();
        element(By.xpath("//strong[text()='filterSettings:']//following::button[1]")).click();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Column menu for Freight column
        element(By.xpath("(//div[contains(@class,'e-columnmenu')])[3]")).click();
        //select Filter
        element(By.id("Grid_colmenu_Filter")).click();
        //type freight value
        element(By.className("e-flmenu-input")).sendKeys("40.42");
        element(By.className("e-flmenu-okbtn")).click();
        //validation
        expect(element(By.className("e-filtered")).isDisplayed()).toBeTruthy();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-047", done);
    })

    it("AllFeatures-048:Enable All features and Open Column Menu and Filter Verified column Filter menu", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //enable Menu filter
        element(By.xpath("//strong[text()='filterSettings:']//following::select[2]")).click();
        element(By.xpath("//option[text()='Menu']")).click();
        element(By.xpath("//strong[text()='filterSettings:']//following::button[1]")).click();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Column menu for Verified column
        element(By.xpath("(//div[contains(@class,'e-columnmenu')])[7]")).click();
        browser.sleep(50);
        //select Filter
        element(By.id("Grid_colmenu_Filter")).click();
        browser.sleep(100);
        //open Dropdown
        element(By.xpath("//input[@id='bool-ui-grid-column6']//following::span")).click();
        browser.sleep(100);
        //click on true
        element(By.xpath("//li[@data-value='true']")).click();
        browser.sleep(200);
        element(By.className("e-flmenu-okbtn")).click();
        //validation
        expect(element(By.className("e-filtered")).isDisplayed()).toBeTruthy();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-048", done);
    })

    it("AllFeatures-049:Enable All features and Open Column Menu and Open OrderDate colum Excel Filter", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //enable Excel filter
        element(By.xpath("//strong[text()='filterSettings:']//following::select[2]")).click();
        element(By.xpath("//option[text()='Excel']")).click();
        element(By.xpath("//strong[text()='filterSettings:']//following::button[1]")).click();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Column menu for orderdate column
        element(By.xpath("(//div[contains(@class,'e-columnmenu')])[5]")).click();
        //select Filter
        element(By.id("Grid_colmenu_Filter")).click();
        //open submenu
        element(By.xpath("//li[contains(@class,'e-submenu')]")).click();
        //validation
        expect(element(By.className("e-excel-menu")).isDisplayed()).toBeTruthy();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-049", done);
    })

    it("AllFeatures-050:Enable All features and Open Column Menu and Open Ship name column Excel Filter", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //enable Excel filter
        element(By.xpath("//strong[text()='filterSettings:']//following::select[2]")).click();
        element(By.xpath("//option[text()='Excel']")).click();
        element(By.xpath("//strong[text()='filterSettings:']//following::button[1]")).click();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Column menu for ShipName column
        element(By.xpath("(//div[contains(@class,'e-columnmenu')])[4]")).click();
        //select Filter
        element(By.id("Grid_colmenu_Filter")).click();
        //open submenu
        element(By.xpath("//li[contains(@class,'e-submenu')]")).click();
        //validation
        expect(element(By.className("e-excel-menu")).isDisplayed()).toBeTruthy();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-050", done);
    })

    it("AllFeatures-051:Enable All features and Open Column Menu and Open Freight column Excel Filter", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //enable Excel filter
        element(By.xpath("//strong[text()='filterSettings:']//following::select[2]")).click();
        element(By.xpath("//option[text()='Excel']")).click();
        element(By.xpath("//strong[text()='filterSettings:']//following::button[1]")).click();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Column menu for Freight column
        element(By.xpath("(//div[contains(@class,'e-columnmenu')])[3]")).click();
        //select Filter
        element(By.id("Grid_colmenu_Filter")).click();
        //open submenu
        element(By.xpath("//li[contains(@class,'e-submenu')]")).click();
        //validation
        expect(element(By.className("e-excel-menu")).isDisplayed()).toBeTruthy();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-051", done);
    })


    it("AllFeatures-056:Enable All features and Open Column Menu and Open Excel filter and filter order Date", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //enable Excel filter
        element(By.xpath("//strong[text()='filterSettings:']//following::select[2]")).click();
        element(By.xpath("//option[text()='Excel']")).click();
        element(By.xpath("//strong[text()='filterSettings:']//following::button[1]")).click();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Column menu for orderdate column
        element(By.xpath("(//div[contains(@class,'e-columnmenu')])[5]")).click();
        //select Filter
        element(By.id("Grid_colmenu_Filter")).click();
        //open submenu
        element(By.xpath("//li[contains(@class,'e-submenu')]")).click();
        //click on equal filter
        element(By.xpath("//li[text()='Equal...']")).click();
        //send order date
        element(By.id("OrderDate-xlfl-frstvalue")).sendKeys("3/13/1998");
        element(By.className("e-xlfl-okbtn")).click();
        //validation
        expect(element(By.className("e-filtered")).isDisplayed()).toBeTruthy();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-056", done);
    })

    it("AllFeatures-057:Enable All features and Open Column Menu and Open Excel filter and filter Shipname", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //enable Excel filter
        element(By.xpath("//strong[text()='filterSettings:']//following::select[2]")).click();
        element(By.xpath("//option[text()='Excel']")).click();
        element(By.xpath("//strong[text()='filterSettings:']//following::button[1]")).click();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Column menu for ShipCountry column
        element(By.xpath("(//div[contains(@class,'e-columnmenu')])[6]")).click();
        //select Filter
        element(By.id("Grid_colmenu_Filter")).click();
        //open submenu
        element(By.xpath("//li[contains(@class,'e-submenu')]")).click();
        //click on equal filter
        element(By.xpath("//li[text()='Equal...']")).click();
        //send ship country
        element(By.id("ShipCountry-xlfl-frstvalue")).sendKeys("Brazil");
        element(By.className("e-xlfl-okbtn")).click();
        //validation
        expect(element(By.className("e-filtered")).isDisplayed()).toBeTruthy();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-057", done);
    })

    it("AllFeatures-058:Enable All features and Open Column Menu and Open Excel filter and filter Freight", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //enable Excel filter
        element(By.xpath("//strong[text()='filterSettings:']//following::select[2]")).click();
        element(By.xpath("//option[text()='Excel']")).click();
        element(By.xpath("//strong[text()='filterSettings:']//following::button[1]")).click();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Column menu for Freight column
        element(By.xpath("(//div[contains(@class,'e-columnmenu')])[3]")).click();
        //select Filter
        element(By.id("Grid_colmenu_Filter")).click();
        //open submenu
        element(By.xpath("//li[contains(@class,'e-submenu')]")).click();
        //click on equal filter
        element(By.xpath("//li[text()='Equal...']")).click();
        //send ship country
        element(By.id("Freight-xlfl-frstvalue")).sendKeys("14.01");
        element(By.className("e-xlfl-okbtn")).click();
        //validation
        expect(element(By.className("e-filtered")).isDisplayed()).toBeTruthy();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-058", done);
    })

    it("AllFeatures-059:Enable All features and Open Column Menu and Open Excel filter and filter Verified", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //enable Excel filter
        element(By.xpath("//strong[text()='filterSettings:']//following::select[2]")).click();
        element(By.xpath("//option[text()='Excel']")).click();
        element(By.xpath("//strong[text()='filterSettings:']//following::button[1]")).click();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Column menu for Verified column
        element(By.xpath("(//div[contains(@class,'e-columnmenu')])[7]")).click();
        //select Filter
        element(By.id("Grid_colmenu_Filter")).click();
        //uncheck true
        element(By.xpath("(//div[@class='e-ftrchk'])[3]")).click();
        element(By.xpath("//div[@id='Gridboolean_excelDlg_dialog-content']//following::button[text()='OK']")).click();
        //validation
        expect(element(By.className("e-filtered")).isDisplayed()).toBeTruthy();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-059", done);
    })

    it("AllFeatures-060:Enable All features and Open Column Menu and Open OrderDate colum Checkbox Filter", (done) => {
        browser.load("/demos/FeatureMatrix_Samples/samples/grid/default/index.html");
        //Enable all features
        helper.enableAllFeatures();
        helper.enableColumnMenu();
        //enable CheckBox filter
        element(By.xpath("//strong[text()='filterSettings:']//following::select[2]")).click();
        element(By.xpath("//option[text()='CheckBox']")).click();
        element(By.xpath("//strong[text()='filterSettings:']//following::button[1]")).click();
        //Enable Edit icons
        helper.EnableEditIcons();
        //Open Column menu for orderdate column
        element(By.xpath("(//div[contains(@class,'e-columnmenu')])[5]")).click();
        //select Filter
        element(By.id("Grid_colmenu_Filter")).click();
        //validation
        expect(element(By.id("Griddate_excelDlg")).isDisplayed()).toBeTruthy();
        //Script error finder 
        helper.Errorfinder();
        browser.sleep(100);
        browser.compareScreen(element(By.id("Grid")), "/FeatureMatrix/AllFeatures/AllFeatures-060", done);
    })
});
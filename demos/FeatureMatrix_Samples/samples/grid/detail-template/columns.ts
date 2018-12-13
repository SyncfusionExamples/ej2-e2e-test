import {
    Grid, Group, Filter, Page, Sort, Edit, Toolbar, Column, GridLine,
    ExcelExport, PdfExport, ContextMenu, CommandColumn, RowDD, Reorder,
    ActionEventArgs, Resize, FilterType, Freeze, Aggregate,
    DetailRow, ColumnMenu, ColumnChooser
} from '../resources/component';
import { employeeData } from './datasource';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { DataManager, ODataV4Adaptor, ODataAdaptor } from '@syncfusion/ej2-data';
import { Property } from '../prop/main';
import { getGridProps, getGridMethods } from './grid-prop';
import { L10n } from '@syncfusion/ej2-base';
import '../../../../../node_modules/es6-promise/dist/es6-promise.js';
import { Internationalization, isNullOrUndefined } from '@syncfusion/ej2-base';
let instance: Internationalization = new Internationalization();
interface DateFormat extends Window {
    format?: Function;
}

/**
 * 
 */

Grid.Inject(Group, Filter, Page, Sort, Edit, Toolbar, ExcelExport, PdfExport, ContextMenu, CommandColumn, RowDD,
    Reorder, Resize, Aggregate, DetailRow, ColumnMenu, ColumnChooser);

let grid: Grid = new Grid({
    dataSource: employeeData,
    detailTemplate: '#detailtemplate',
    columns: [
        {
            field: 'EmployeeID', headerText: 'Employee ID',
            textAlign: 'Left', type: 'number', validationRules: { required: true }, isPrimaryKey: true, editType: 'numericedit'
        },
        { field: 'FirstName', headerText: 'First Name', width: 110 },
        { field: 'LastName', headerText: 'Last Name', width: 110, edit: { params: { popupHeight: '300px' } }, editType: 'dropdownedit' },
        { field: 'Title', headerText: 'Title', width: 150 },
        { field: 'Country', headerText: 'Country', width: 110 },
        { field: 'BirthDate', headerText: 'BirthDate', width: 110, format: 'yMd', editType: 'datepickeredit' , type:'date'}
    ]
});

(window as DateFormat).format = (value: Date) => {
    if (!isNullOrUndefined(value)) {
        return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
    }
    return '';
}
L10n.load({
    'de-DE': {
        'grid': {
            'EmptyRecord': 'Keine Aufzeichnungen angezeigt',
            'GroupDropArea': 'Ziehen Sie einen Spaltenkopf hier, um die Gruppe ihre Spalte',
            'UnGroup': 'Klicken Sie hier, um die Gruppierung aufheben',
            'EmptyDataSourceError': 'DataSource darf bei der Erstauslastung nicht leer sein, da Spalten aus der dataSource im AutoGenerate Spaltenraster',
            'Item': 'Artikel',
            'Items': 'Artikel'
        },
        'pager': {
            'currentPageInfo': '{0} von {1} Seiten',
            'totalItemsInfo': '({0} Beiträge)',
            'firstPageTooltip': 'Zur ersten Seite',
            'lastPageTooltip': 'Zur letzten Seite',
            'nextPageTooltip': 'Zur nächsten Seite',
            'previousPageTooltip': 'Zurück zur letzten Seit',
            'nextPagerTooltip': 'Zum nächsten Pager',
            'previousPagerTooltip': 'Zum vorherigen Pager'
        }
    }
});

grid.appendTo('#Grid');

let PropSection: HTMLElement = document.querySelector('.prop') as HTMLElement;
let PropTable = new Property(grid, getGridProps(grid), getGridMethods(grid));
PropTable.appendTo(PropSection);

grid.toolbarClick = (args: ClickEventArgs) => {
    if (args.item.id === 'Grid_pdfexport') {
        grid.pdfExport();
    }
    if (args.item.id === 'Grid_excelexport') {
        grid.excelExport();
    }
    if (args.item.id === 'Grid_csvexport') {
        grid.csvExport();
    }
 }

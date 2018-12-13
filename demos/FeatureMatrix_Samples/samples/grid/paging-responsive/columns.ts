import {
    Grid, Group, Filter, Page, Sort, Edit, Toolbar, Column, GridLine,
    ExcelExport, PdfExport, ContextMenu, CommandColumn, RowDD, Reorder,
    ActionEventArgs, Resize, FilterType, Freeze, Aggregate,
    DetailRow, ColumnMenu, ColumnChooser
} from '../resources/component';
import { OrderData } from './data';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { DataManager, ODataV4Adaptor, ODataAdaptor } from '@syncfusion/ej2-data';
import { Property } from '../prop/main';
import { getGridProps, getGridMethods } from './grid-prop'
import { L10n } from '@syncfusion/ej2-base'

Grid.Inject(Group, Filter, Page, Sort, Edit, Toolbar,
    ExcelExport, PdfExport, ContextMenu, CommandColumn, RowDD, Reorder,
    Resize, Aggregate,
    DetailRow, ColumnMenu, ColumnChooser);

let data: any = OrderData;

let col: Object[] = [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', type: 'number', validationRules: { required: true }, isPrimaryKey: true },
    { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', type: 'number', validationRules: { required: true } },   
    { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', validationRules: { required: true }, editType: 'numericedit' },
    { field: 'ShipName', headerText: 'Ship Name', textAlign: 'Left' },
    { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', editType: 'datepickeredit', type:'date' },
    { field: 'ShipCountry', headerText: 'Ship Country', edit: { params: { popupHeight: '300px' } }, editType: 'dropdownedit', textAlign: 'Left' },   
    { field: 'Verified', headerText: 'Verified', type: 'boolean', editType: 'booleanedit',displayAsCheckBox: true, textAlign: 'Center' }
];

let grid: Grid = new Grid({
    dataSource: data,
    columns: col,
    height: window.innerHeight - 240
});

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
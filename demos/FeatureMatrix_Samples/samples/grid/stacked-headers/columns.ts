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
    {
        headerText: 'Order', textAlign: 'Left', type: 'number', validationRules: { required: true }, isPrimaryKey: true,
        columns: [
            { field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', textAlign: 'Left', width: 90, type: 'number', validationRules: { required: true } },
            { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Left', width: 110, type: 'number', validationRules: { required: true } },
            { field: 'Freight', headerText: 'Freight', textAlign: 'Left', width: 100, format: 'C2', validationRules: { required: true }, editType: 'numericedit' }

        ]
    },
    { field: 'ShipName', headerText: 'Ship Name', width: 145, textAlign: 'Left' },
    { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', width: 110, editType: 'datepickeredit', type: 'date' },
    {
        field: 'ShipDetails', headerText: 'Ship Details', columns: [
            { field: 'ShippedDate', headerText: 'Shipped Date', textAlign: 'Left', width: 120, format: 'yMd', editType: 'datepickeredit',type: 'date' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 120 },
            { field: 'Verified', headerText: 'Verified', type: 'boolean', width: 90, editType: 'booleanedit', textAlign: 'Left' }
        ]
    }
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
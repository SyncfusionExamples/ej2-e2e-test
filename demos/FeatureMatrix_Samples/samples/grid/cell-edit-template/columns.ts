import {
    Grid, Group, Filter, Page, Sort, Edit, Toolbar, Column, GridLine,
    ExcelExport, PdfExport, ContextMenu, CommandColumn, RowDD, Reorder,
    ActionEventArgs, Resize, FilterType, Freeze, Aggregate,
    DetailRow, ColumnMenu, ColumnChooser
} from '../resources/component';
import { OrderData } from './data';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { DataManager, ODataV4Adaptor, ODataAdaptor, DataUtil } from '@syncfusion/ej2-data';
import {PageEventArgs, Action, EditEventArgs} from '@syncfusion/ej2-grids';
import { Property } from '../prop/main';
import { getGridProps, getGridMethods } from './grid-prop';
import { L10n } from '@syncfusion/ej2-base';
import { NumericTextBox } from '@syncfusion/ej2-inputs';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DatePicker } from '@syncfusion/ej2-calendars';
import { CheckBox } from '@syncfusion/ej2-buttons';

Grid.Inject(Group, Filter, Page, Sort, Edit, Toolbar,
    ExcelExport, PdfExport, ContextMenu, CommandColumn, RowDD, Reorder,
    Resize, Aggregate,
    DetailRow, ColumnMenu, ColumnChooser);

let data: any = OrderData;

let countryData: {}[] = DataUtil.distinct(OrderData, 'ShipCountry', true);


let col: Object[] = [
    { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Left', type: 'number', validationRules: { required: true }, isPrimaryKey: true },
    { field: 'EmployeeID', headerText: 'Employee ID',width: 120, textAlign: 'Left', type: 'number', validationRules: { required: true } },   
    { field: 'Freight', headerText: 'Freight',width: 120, textAlign: 'Left', format: 'C2', validationRules: { required: true }, editTemplate: '<input name="Freight" value="${Freight}"/>',
    edit: {
        write: (args: any) => {
            // Convert Widget for the Freight field
            new NumericTextBox({value: args.data.Freight, format: 'C2', placeholder: 'Freight', floatLabelType: 'Always' },
                                args.form.elements.namedItem('Freight') as HTMLInputElement );
        }
    }},
    { field: 'ShipName', headerText: 'Ship Name',width: 120, textAlign: 'Left' },
    { field: 'OrderDate', headerText: 'Order Date',width: 120, format: 'yMd',  type:'date',editTemplate: '<input name="OrderDate" value="${OrderDate}"/>',
    edit: {
        write: (args: any) => {
            // Convert Widget for the OrderDate field
            new DatePicker({value: args.data.OrderDate, placeholder: 'Order Date', floatLabelType: 'Always' },
                            args.form.elements.namedItem('OrderDate') as HTMLInputElement);
        }
    }},
    { field: 'ShipCountry', headerText: 'Ship Country',width: 120, textAlign: 'Left', editTemplate: '<input name="ShipCountry" value="${ShipCountry}"/>',
    edit: {
        write: (args: any) => {
            // Convert Widget for the ShipCountry field
            new DropDownList({value: args.data.ShipCountry, popupHeight: '300px', floatLabelType: 'Always',
                                dataSource: countryData, fields: {text: 'ShipCountry', value: 'ShipCountry'}, placeholder: 'Ship Country'},
                                args.form.elements.namedItem('ShipCountry') as HTMLInputElement);
        }
    }},   
    { field: 'Verified', headerText: 'Verified',width: 120, type: 'boolean',displayAsCheckBox: true, textAlign: 'Center', editTemplate: '<input type="checkbox" name="Verified" value="${Verified}"/>',
    edit: {
        write: (args: any) => {
            new CheckBox({ label: 'Verified', checked: args.data.Verified }, args.form.elements.namedItem('Verified') as HTMLInputElement);
        }
    }}
];

let grid: Grid = new Grid({
    dataSource: data,
    columns: col,
    height: window.innerHeight - 240,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch'},
    toolbar: ['Add', 'Edit', 'Delete']
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

 export interface IOrderModel {
    CustomerID?: string;
    ShipCity?: string;
    OrderDate?: Date;
    Freight?: number;
    ShipCountry?: string;
    Verified?: boolean;
}

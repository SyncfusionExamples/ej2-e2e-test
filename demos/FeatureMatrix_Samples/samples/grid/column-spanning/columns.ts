import {
    Grid, Group, Filter, Page, Sort, Edit, Toolbar, Column, GridLine,
    ExcelExport, PdfExport, ContextMenu, CommandColumn, RowDD, Reorder,
    ActionEventArgs, Resize, FilterType, Freeze, Aggregate,
    DetailRow, ColumnMenu, ColumnChooser, QueryCellInfoEventArgs
} from '../resources/component';
import { columnSpanData, ColumnSpanDataType } from './datasource';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { DataManager, ODataV4Adaptor, ODataAdaptor } from '@syncfusion/ej2-data';
import { Property } from '../prop/main';
import { getGridProps, getGridMethods } from './grid-prop';
import { L10n } from '@syncfusion/ej2-base';

Grid.Inject(Group, ContextMenu,Edit, Toolbar);

let grid: Grid = new Grid(
    {
        dataSource: columnSpanData,
        queryCellInfo: QueryCellEvent,
        columns: [
            { field: 'EmployeeID', headerText: 'Employee ID', isPrimaryKey: true, textAlign: 'Left', width: 150 },
            { field: 'EmployeeName', headerText: 'Employee Name', width: 200 },
            { field: 'nine', headerText: '9.00 AM', width: 120 },
            { field: 'ninethirty', headerText: '9.30 AM', width: 120 },
            { field: 'ten', headerText: '10.00 AM', width: 120 },
            { field: 'tenthirty', headerText: '10.30 AM', width: 120 },
            { field: 'eleven', headerText: '11.00 AM', width: 120 },
            { field: 'eleventhirty', headerText: '11.30 AM', width: 120 },
            { field: 'twelve', headerText: '12.00 PM', width: 120 },
            { field: 'twelvethirty', headerText: '12.30 PM', width: 120 },
            { field: 'twothirty', headerText: '2.30 PM', width: 120 },
            { field: 'three', headerText: '3.00 PM', width: 120 },
            { field: 'threethirty', headerText: '3.30 PM', width: 120 },
            { field: 'four', headerText: '4.00 PM', width: 120 },
            { field: 'fourthirty', headerText: '4.30 PM', width: 120 },
            { field: 'five', headerText: '5.00 PM', width: 120 }
        ]
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
function QueryCellEvent(args: QueryCellInfoEventArgs): void {
    if(!args){
        return;
    }
    let data: ColumnSpanDataType = args.data as ColumnSpanDataType;
    switch (data.EmployeeID) {
        case 10001:
            if (args.column.field === 'nine' || args.column.field === 'twothirty' || args.column.field === 'fourthirty') {
                args.colSpan = 2;
            } else if (args.column.field === 'eleven') {
                args.colSpan = 3;
            }
            break;
        case 10002:
            if (args.column.field === 'ninethirty' || args.column.field === 'twothirty' ||
                args.column.field === 'fourthirty') {
                args.colSpan = 3;
            } else if (args.column.field === 'eleven') {
                args.colSpan = 4;
            }
            break;
        case 10003:
            if (args.column.field === 'nine' || args.column.field === 'eleventhirty') {
                args.colSpan = 3;
            } else if (args.column.field === 'tenthirty' || args.column.field === 'threethirty' ||
                args.column.field === 'fourthirty' || args.column.field === 'twothirty') {
                args.colSpan = 2;
            }
            break;
        case 10004:
            if (args.column.field === 'nine') {
                args.colSpan = 3;
            } else if (args.column.field === 'eleven') {
                args.colSpan = 4;
            } else if (args.column.field === 'four' || args.column.field === 'twothirty') {
                args.colSpan = 2;
            }
            break;
        case 10005:
            if (args.column.field === 'nine') {
                args.colSpan = 4;
            } else if (args.column.field === 'eleventhirty') {
                args.colSpan = 3;
            } else if (args.column.field === 'threethirty' || args.column.field === 'fourthirty' || args.column.field === 'twothirty') {
                args.colSpan = 2;
            }
            break;
        case 10006:
            if (args.column.field === 'nine' || args.column.field === 'fourthirty' ||
                args.column.field === 'twothirty' || args.column.field === 'threethirty') {
                args.colSpan = 2;
            } else if (args.column.field === 'ten' || args.column.field === 'eleventhirty') {
                args.colSpan = 3;
            }
            break;
        case 10007:
            if (args.column.field === 'nine' || args.column.field === 'three' || args.column.field === 'tenthirty') {
                args.colSpan = 2;
            } else if (args.column.field === 'eleventhirty' || args.column.field === 'four') {
                args.colSpan = 3;
            }
            break;
        case 10008:
            if (args.column.field === 'nine' || args.column.field === 'tenthirty' || args.column.field === 'twothirty') {
                args.colSpan = 3;
            } else if (args.column.field === 'four') {
                args.colSpan = 2;
            }
            break;
        default:
            extendQueryCellEvent(args, data.EmployeeID);
    }
}

function extendQueryCellEvent(args: QueryCellInfoEventArgs, value: number): void {
    switch (value) {
        case 10009:
            if (args.column.field === 'nine' || args.column.field === 'eleventhirty') {
                args.colSpan = 3;
            } else if (args.column.field === 'fourthirty' || args.column.field === 'twothirty') {
                args.colSpan = 2;
            }
            break;
        case 100010:
            if (args.column.field === 'nine' || args.column.field === 'twothirty' ||
                args.column.field === 'four' || args.column.field === 'eleventhirty') {
                args.colSpan = 3;
            } else if (args.column.field === 'tenthirty') {
                args.colSpan = 2;
            }
            break;
    }
}
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
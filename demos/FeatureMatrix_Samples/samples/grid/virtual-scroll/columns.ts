import {
    Grid, Group, Filter, Page, Sort, Edit, Toolbar, Column, GridLine,
    ExcelExport, PdfExport, ContextMenu, CommandColumn, RowDD, Reorder,
    ActionEventArgs, Resize, FilterType, Freeze, Aggregate,
    DetailRow, ColumnMenu, ColumnChooser, VirtualScroll
} from '../resources/component';
import { OrderData, employeeData } from './data';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { DataManager, ODataV4Adaptor, ODataAdaptor } from '@syncfusion/ej2-data';
import { Property } from '../prop/main';
import { getGridProps, getGridMethods } from './grid-prop';
import { L10n } from '@syncfusion/ej2-base';
import '../../../node_modules/es6-promise/dist/es6-promise.js';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Group, Filter, Page, Sort, Edit, Toolbar,
    ExcelExport, PdfExport, ContextMenu, CommandColumn, RowDD, Reorder,
    Resize, Aggregate,
    DetailRow, ColumnMenu, ColumnChooser, VirtualScroll);

let virtualData: Object[] = [];
let names: string[] = ['hardire', 'abramjo01', 'aubucch01', 'Hook', 'Rumpelstiltskin', 'Belle', 'Emma', 'Regina', 'Aurora', 'Elsa',
    'Anna', 'Snow White', 'Prince Charming', 'Cora', 'Zelena', 'August', 'Mulan', 'Graham', 'Discord', 'Will', 'Robin Hood',
    'Jiminy Cricket', 'Henry', 'Neal', 'Red', 'Aaran', 'Aaren', 'Aarez', 'Aarman', 'Aaron', 'Aaron-James', 'Aarron', 'Aaryan', 'Aaryn',
    'Aayan', 'Aazaan', 'Abaan', 'Abbas', 'Abdallah', 'Abdalroof', 'Abdihakim', 'Abdirahman', 'Abdisalam', 'Abdul', 'Abdul-Aziz',
    'Abdulbasir', 'Abdulkadir', 'Abdulkarem', 'Abdulkhader', 'Abdullah', 'Abdul-Majeed', 'Abdulmalik', 'Abdul-Rehman', 'Abdur',
    'Abdurraheem', 'Abdur-Rahman', 'Abdur-Rehmaan', 'Abel', 'Abhinav', 'Abhisumant', 'Abid', 'Abir', 'Abraham', 'Abu', 'Abubakar',
    'Ace', 'Adain', 'Adam', 'Adam-James', 'Addison', 'Addisson', 'Adegbola', 'Adegbolahan', 'Aden', 'Adenn', 'Adie', 'Adil', 'Aditya',
    'Adnan', 'Adrian', 'Adrien', 'Aedan', 'Aedin', 'Aedyn', 'Aeron', 'Afonso', 'Ahmad', 'Ahmed', 'Ahmed-Aziz', 'Ahoua', 'Ahtasham',
    'Aiadan', 'Aidan', 'Aiden', 'Aiden-Jack', 'Aiden-Vee'];
let date1: number;
let date2: number;
let booleanvalues: boolean[] = [true, false];

let genarateData: Button = new Button({}, '#genarate');
genarateData.element.onclick = () => {
    if (!virtualData.length) {
        dataSource();
        grid.dataSource = virtualData;
    } else {
        grid.refresh();
    }
};

function dataSource(): void {
    for (let i: number = 0; i < 10000; i++) {
        virtualData.push({
            'FIELD1': names[Math.floor(Math.random() * names.length)] + Math.floor(Math.random() * names.length),
            'FIELD2': 1967 + (i % 10),
            'checkBoxFeild': booleanvalues[Math.floor(Math.random() * booleanvalues.length)],
            'FIELD3': Math.floor(Math.random() * 200),
            'FIELD4': Math.floor(Math.random() * 100),
            'FIELD5': Math.floor(Math.random() * 2000),
            'FIELD6': Math.floor(Math.random() * 1000), 
            'FIELD7': Math.floor(Math.random() * 100),
            'FIELD8': Math.floor(Math.random() * 10),
            'FIELD9': Math.floor(Math.random() * 10),
            'FIELD10': Math.floor(Math.random() * 100),
            'FIELD11': Math.floor(Math.random() * 100),
            'FIELD12': Math.floor(Math.random() * 1000),
            'FIELD13': Math.floor(Math.random() * 10),
            'FIELD14': Math.floor(Math.random() * 10),
            'FIELD15': Math.floor(Math.random() * 1000),
            'FIELD16': Math.floor(Math.random() * 200),
            'FIELD17': Math.floor(Math.random() * 300),
            'FIELD18': Math.floor(Math.random() * 400),
            'FIELD19': Math.floor(Math.random() * 500),
            'FIELD20': Math.floor(Math.random() * 700),
            'FIELD21': Math.floor(Math.random() * 800),
            'FIELD22': Math.floor(Math.random() * 1000),
            'FIELD23': Math.floor(Math.random() * 2000),
            'FIELD24': Math.floor(Math.random() * 150),
            'FIELD25': Math.floor(Math.random() * 1000),
            'FIELD26': Math.floor(Math.random() * 100),
            'FIELD27': Math.floor(Math.random() * 400),
            'FIELD28': Math.floor(Math.random() * 600),
            'FIELD29': Math.floor(Math.random() * 500),
            'FIELD30': Math.floor(Math.random() * 300),
        });
    }
}


let grid: Grid = new Grid(
    {
        dataSource: [],
        enableVirtualization: true,
        enableColumnVirtualization: true,
        height: 400,
        columns: [
            { field: 'checkBoxFeild',type:"checkbox"},
            { field: 'FIELD1', headerText: 'Player Name', isPrimaryKey : true },
            { field: 'FIELD2', headerText: 'Year', width: 120, textAlign: 'Left' },
            { field: 'FIELD3', headerText: 'Stint', width: 120, textAlign: 'Left' },
            { field: 'FIELD4', headerText: 'TMID', width: 120, textAlign: 'Left' },
            { field: 'FIELD5', headerText: 'LGID', width: 120, textAlign: 'Left' },
            { field: 'FIELD6', headerText: 'GP', width: 120, textAlign: 'Left' },
            { field: 'FIELD7', headerText: 'GS', width: 120, textAlign: 'Left' },
            { field: 'FIELD8', headerText: 'Minutes', width: 120, textAlign: 'Left' },
            { field: 'FIELD9', headerText: 'Points', width: 120, textAlign: 'Left' },
            { field: 'FIELD10', headerText: 'oRebounds', width: 130, textAlign: 'Left' },
            { field: 'FIELD11', headerText: 'dRebounds', width: 130, textAlign: 'Left' },
            { field: 'FIELD12', headerText: 'Rebounds', width: 120, textAlign: 'Left' },
            { field: 'FIELD13', headerText: 'Assists', width: 120, textAlign: 'Left' },
            { field: 'FIELD14', headerText: 'Steals', width: 120, textAlign: 'Left' },
            { field: 'FIELD15', headerText: 'Blocks', width: 120, textAlign: 'Left' },
            { field: 'FIELD16', headerText: 'Turnovers', width: 130, textAlign: 'Left' },
            { field: 'FIELD17', headerText: 'PF', width: 130, textAlign: 'Left' },
            { field: 'FIELD18', headerText: 'fgAttempted', width: 150, textAlign: 'Left' },
            { field: 'FIELD19', headerText: 'fgMade', width: 120, textAlign: 'Left' },
            { field: 'FIELD20', headerText: 'ftAttempted', width: 150, textAlign: 'Left' },
            { field: 'FIELD21', headerText: 'ftMade', width: 120, textAlign: 'Left' },
            { field: 'FIELD22', headerText: 'ThreeAttempted', width: 150, textAlign: 'Left' },
            { field: 'FIELD23', headerText: 'ThreeMade', width: 130, textAlign: 'Left' },
            { field: 'FIELD24', headerText: 'PostGP', width: 120, textAlign: 'Left' },
            { field: 'FIELD25', headerText: 'PostGS', width: 120, textAlign: 'Left' },
            { field: 'FIELD26', headerText: 'PostMinutes', width: 120, textAlign: 'Left' },
            { field: 'FIELD27', headerText: 'PostPoints', width: 130, textAlign: 'Left' },
            { field: 'FIELD28', headerText: 'PostoRebounds', width: 130, textAlign: 'Left' },
            { field: 'FIELD29', headerText: 'PostdRebounds', width: 130, textAlign: 'Left' },
            { field: 'FIELD30', headerText: 'PostRebounds', width: 130, textAlign: 'Left' }],

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
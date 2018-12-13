import * as Util from './prop-util';
import { GridProperty } from './grid-prop-utils';
import { GridMethods } from './grid-methods';
import { simple, complex, ButtonOptions, DDLOptions, rowOptions, InputOptions } from './prop-util';
import { IGrid, wrap, SortDescriptorModel, Grid } from '../resources/component';
import { createElement } from '@syncfusion/ej2-base';

export class Property {
    private grid: IGrid;
    private properties: (simple | complex)[];
    private methods: { [Key: string]: string | object }[];
    constructor(grid: IGrid | Grid, prop?: (simple | complex)[], methods?: { [Key: string]: string | object }[]) {
        this.grid = grid;
        this.properties = prop;
        this.methods = methods;
    }
    public appendTo(selector: HTMLElement) {
        if (this.properties) {
            selector.appendChild(this.generateTable());
        }
        if (this.methods) {
            selector.appendChild(this.generateMethods());
        }   
    }
    public generateTable(): HTMLElement {
        let table = createElement('div', { innerHTML: '<div class=highlight>Properties:</div>' });
        let gridProp = new GridProperty(this.grid, this.properties);
        table.appendChild(gridProp.render());
        return table;
    }

    public generateMethods(): HTMLElement {
        let gridMethods = new GridMethods(this.grid, this.methods);
        return gridMethods.render()
    }
}






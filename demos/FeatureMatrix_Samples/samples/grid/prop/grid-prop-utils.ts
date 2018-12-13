import * as Util from './prop-util';
import { ButtonOptions, DDLOptions, rowOptions, InputOptions, CheckBoxOptions, ComponentType, Component, simple, complex } from './prop-util';
import { IGrid, wrap, SortDescriptorModel } from '../resources/component';
import { createElement, EventHandler, closest } from '@syncfusion/ej2-base';
import { composite } from './composite';

export class GridProperty {
    private grid: IGrid;
    private properties: (simple | complex)[];
    private element: HTMLElement;
    constructor(grid: IGrid, properties: (simple | complex)[]) {
        this.grid = grid;
        this.properties = properties;
        let wrap = document.querySelector('.prop');
        EventHandler.add(wrap, 'click', function (e: any) {
            let ul = closest(e.target, '.multiselect');
            if (ul && ul.getAttribute('data-prop') !== null) {
                if (e.target.type === 'checkbox') {
                    let options = [].slice.call(ul.querySelectorAll('input[type=checkbox]'));
                    if (options.length) {
                        let temp = [];
                        for (let opt of options) {
                            if (opt.checked) {
                                temp.push(opt.value);
                            }
                        }
                        this.grid[ul.getAttribute('data-prop')] = temp;
                    }
                    this.grid.dataBind();
                }
            }
        }, this);
    }

    private booleanProperty(prop: string, def: boolean): CheckBoxOptions {
        return {
            type: 'checkbox',
            default: def,
            change: (e: Event) => {
                this.grid[prop] = (e.srcElement as HTMLInputElement).checked;
                this.grid.dataBind();
            }
        }
    }

    private ddlProperty(prop: string, def: string, data: string[]): DDLOptions {
        return {
            type: 'ddl',
            data: data,
            default: def,
            change: (e: Event) => {
                this.grid[prop] = (e.srcElement as HTMLSelectElement).value;
                this.grid.dataBind();
            }
        }
    }

    private multiSelectProperty(prop: string, def: string[], data: string[]): DDLOptions {
        return {
            type: 'multiSelect',
            data: data,
            default: def,
            change: (e: Event) => {
                let options = [].slice.call((e.srcElement as HTMLSelectElement).selectedOptions);
                if (options.length) {
                    let temp = [];
                    for (let opt of options) {
                        temp.push((opt as HTMLOptionElement).innerText);
                    }
                    this.grid[prop] = temp;
                }
                this.grid.dataBind();
            }
        }
    }

    private checkboxMultiSelectProperty(prop: string, def: string[], data: string[]): DDLOptions {
        return {
            type: 'checkboxMSList',
            data: data,
            default: def,
            attrs: { 'data-prop': prop },
            change: (e: Event) => {
                let options = [].slice.call((e.target as HTMLUListElement).querySelectorAll('input[type=checkbox]'));
                if (options.length) {
                    let temp = [];
                    for (let opt of options) {
                        if (opt.checked) {
                            temp.push(opt.value);
                        }
                    }
                    this.grid[prop] = temp;
                }
                this.grid.dataBind();
            }
        }
    }


    private inputProperty(prop: string, def: string): InputOptions {
        return {
            type: 'input',
            default: def,
            change: (e: Event) => {
                let val: string | number;
                if (isNaN(parseInt((e.srcElement as HTMLInputElement).value))) {
                    val = (e.srcElement as HTMLInputElement).value;
                } else {
                    val = parseInt((e.srcElement as HTMLInputElement).value);
                }
                this.grid[prop] = val;
                this.grid.dataBind();
            }
        }
    }

    private buttonProperty(prop: string, def: string | boolean): ButtonOptions {
        return {
            type: 'button',
            default: def,
            text: prop,
            click: (e: Event) => {
                this.grid[prop] = (e.srcElement as HTMLInputElement).value;
                this.grid.dataBind();
            }
        }
    }


    private column(data: Data): ComponentType {
        let widget: ComponentType;
        switch (data.type) {
            case 'input':
                widget = this.inputProperty(data.prop, data.def as string);
                break;
            case 'ddl':
                widget = this.ddlProperty(data.prop, data.def as string, data.data);
                break;
            case 'checkbox':
                widget = this.booleanProperty(data.prop, data.def as boolean);
                break;
            case 'button':
                widget = this.buttonProperty(data.prop, data.def as string);
                break;
            case 'multiSelect':
                widget = this.multiSelectProperty(data.prop, data.def as string[], data.data);
                break;
            case 'checkboxMSList':
                widget = this.checkboxMultiSelectProperty(data.prop, data.def as string[], data.data);
                break;
        }
        return widget;
    }

    private getType(type: string): string {
        let temp: string;
        switch (type) {
            case 'bool':
                temp = 'checkbox';
                break;
            case 'select':
                temp = 'ddl';
                break;
            case 'text':
                temp = 'input';
                break;
            case 'array':
                temp = 'checkboxMSList';
                break;
            case 'button':
                temp = 'button';
                break;

        }
        return temp;
    }
    private generateRow(data: Util.simple | Util.complex): rowOptions {
        let args: Data;
        let row: rowOptions;

        if (!this.isComplex(data)) {
            let d = data as Util.simple;
            let type = this.getType(d.type);
            args = {
                prop: d.prop,
                def: this.grid[d.prop],
                data: d.data,
                type: type as Component
            }
            row = {
                label: d.prop,
                component: [this.column(args)]
            }
            this.element.appendChild(this.generateRowElement(row));
        } else {
            let comp = new composite(data, this.grid);
            this.element.appendChild(comp.render());
        }

        return row;
    }

    private isComplex(data: Util.simple | Util.complex): boolean {
        return typeof data.prop === 'object';
    }

    private isLeafNode(data: object): boolean {
        return data === null || data['data'] !== undefined ? true : false;
    }

    public render(): HTMLElement {
        this.element = createElement('div');
        this.generateRows();
        return this.element
    }

    private generateRowElement(row: rowOptions): HTMLElement {
        let columns: Element[] = [];
        columns.push(createElement('strong', { innerHTML: row.label }));
        for (let comp of row.component) {
            columns.push(Util.generateWidget(comp));
        }
        return Util.generateColumn(columns, Util.generateRow());
    }

    private generateRows(): rowOptions[] {
        let rows = [];
        for (let row of this.properties) {
            let options = { label: row.prop };
            rows.push(this.generateRow(row))
        }
        return rows as rowOptions[];
    }

}

export interface Data {
    prop: string;
    def: string | boolean | number | string[];
    data?: string[];
    type: Component;
}

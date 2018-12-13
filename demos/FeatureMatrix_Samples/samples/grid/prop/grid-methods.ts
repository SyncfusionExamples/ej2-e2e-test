import { IGrid } from '../resources/component';
import { createElement, closest } from "@syncfusion/ej2-base";
import { singleProp, rowOptions, DDLOptions, CheckBoxOptions, InputOptions, Button } from "./prop-util";
import { Options } from "selenium-webdriver/firefox";

export class GridMethods {
    private methods: { [Key: string]: string | object }[];
    private grid: IGrid;
    private element: HTMLElement;

    constructor(grid: IGrid, method: { [Key: string]: string | object }[]) {
        this.grid = grid;
        this.methods = method;
    }

    public render(): HTMLElement {
        this.element = createElement('div', { innerHTML: '<div class=highlight>Methods:</div>' });
        for (let m of this.methods) {
            this.renderMethodElements(m);
        }
        return this.element;
    }

    private renderMethodElements(method: { [Key: string]: object | string }): void {
        let methodwrap;
        for (let key in method) {
            if (key === 'name') {
                methodwrap = this.getElement(key as string, 'method');
                methodwrap.appendChild(
                    createElement('strong', { innerHTML: method[key] as string })
                );
            }
            else {
                methodwrap.appendChild(this.renderSimpleProp(key, method[key]['type'], method[key]['data']));
            }
        }
        let submit = Button('Apply', (e: Event) => {
            this.submitAction(e);
        });
        methodwrap.appendChild(submit);
        this.element.appendChild(methodwrap);
    }

    private submitAction(e: Event) {
        let wrap: HTMLElement = closest(e.srcElement, '[data-prop=name]') as HTMLElement;
        let methodName: string = wrap.querySelector('strong').innerHTML;
        let child: Array<HTMLElement> = [].slice.call(wrap.childNodes);
        child = child.filter(m => m.hasAttribute('data-prop'));
        if (child.length > 0) {
            this.grid[methodName](...this.getParams(child,methodName));
        } else {
            this.grid[methodName].apply(this.grid);
        }
    }
    private getParams(child: Array<HTMLElement>,methodName :string): Array<object | boolean | string | number> {
        let params: Array<object | boolean | string | number> = [];
        for (let c of child) {
            let type: string = c.getAttribute('data-type');
            switch (type) {
                case 'array':
                    let options = [].slice.call((c.querySelector('ul') as HTMLUListElement).querySelectorAll('input[type=checkbox]'));
                    if (options.length) {
                        let temp = [];
                        for (let opt of options) {
                            if (opt.checked) {
                                let val;
                                if (isNaN(parseInt(opt.value))) {
                                    val = opt.value
                                } else {
                                    if (methodName === "selectRows") {
                                        val = parseInt(opt.value)
                                    }
                                    else {
                                        val = parseInt((opt.val));
                                    }
                                }
                                temp.push(val);
                            }
                        }
                        params.push(temp);
                    } else {
                        params.push([])
                    }
                    break;
                case 'checkbox':
                    let check: HTMLInputElement = c.querySelector('input[type=checkbox]') as HTMLInputElement;
                    params.push(check.checked)
                    break;
                case 'select':
                    params.push(c.querySelector('select').value);
                    break;
                case 'text':
                    let val: string | number | any = c.querySelector('input').value;
                    if (methodName === 'selectCell') {
                        val = { rowIndex: parseInt(val.split(',')[0]), cellIndex: parseInt(val.split(',')[1]) }
                    } else {
                        if (!isNaN(parseInt(val))) {
                            val = parseInt(val, 10);
                        } else {
                            val = val === '' ? null : val;
                        }
                    }

                    params.push(val);
                    break;
            }
        }
        return params;
    }

    private renderSimpleProp(key: string, type: string, data: Array<string>) {
        let wrap: HTMLElement;
        let options: rowOptions;
        let comp: any;
        switch (type) {
            case 'array':
                wrap = this.getElement(key as string, 'array');
                comp = {
                    data: data,
                    type: 'checkboxMSList'
                };
                options = { component: [comp as DDLOptions], label: key as string };
                break;

            case 'select':
                wrap = this.getElement(key as string, 'select');
                comp = {
                    data: data,
                    type: 'ddl'
                };
                options = { component: [comp as DDLOptions], label: key as string };
                break;

            case 'bool':
                wrap = this.getElement(key as string, 'checkbox');
                comp = {
                    type: 'checkbox'
                };
                options = { component: [comp as CheckBoxOptions], label: key as string };
                break;

            case 'text':
                wrap = this.getElement(key as string, 'text');
                comp = {
                    type: 'input'
                };
                options = { component: [comp as InputOptions], label: key as string };
                break;
        }
        singleProp(options, wrap);
        return wrap;
    }
    private getElement(propName: string, type: string, innerHtml?: Element): HTMLElement {
        return createElement('div', {
            attrs: {
                'data-prop': propName,
                'data-type': type
            }, innerHTML: innerHtml ? innerHtml.outerHTML : ''
        });
    }
}
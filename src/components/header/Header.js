import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
    static className = 'excel__header'

    constructor($root) {
        super($root, {
            name: 'Table',
            listeners: ['click']
        });
    }

    toHTML() {
        return '<h1>Header</h1>';
    }

    onClick(event) {
        console.log(event.target())
    }
}

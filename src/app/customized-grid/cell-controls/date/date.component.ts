import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
    selector: 'app-date-cell',
    templateUrl: './date.component.html'
})
export class DateComponent implements ICellRendererAngularComp {
    public date: Date;

    public agInit(params: ICellRendererParams): void {
        this.setDate(params.value);
    }

    public refresh(params: ICellRendererParams): boolean {
        this.setDate(params.value);
        return true;
    }

    private setDate(value: string): void {
        this.date = new Date(value);
    }
}

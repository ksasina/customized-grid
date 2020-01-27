import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-image-cell',
  templateUrl: './image.component.html'
})
export class ImageComponent implements ICellRendererAngularComp {
  public url: string;

  public agInit(params: ICellRendererParams): void {
    this.setUrl(params.value);
  }

  public refresh(params: ICellRendererParams): boolean {
    this.setUrl(params.value);
    return true;
  }

  private setUrl(value: string): void {
    this.url = value;
  }
}

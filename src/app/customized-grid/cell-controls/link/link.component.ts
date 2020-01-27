import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-link-cell',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements ICellRendererAngularComp {
  public url: string;
  public title: string;

  public agInit(params: ICellRendererParams): void {
    this.setUrl(params);
  }

  public setUrl(params: ICellRendererParams): void {
    this.url = `https://www.youtube.com/watch?v=${params.data.videoId}`;
    this.title = params.value;
  }

  public refresh(params: ICellRendererParams): boolean {
    this.setUrl(params);
    return true;
  }
}

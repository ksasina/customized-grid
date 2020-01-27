import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  public count = 0;

  private params: GridOptions;

  public agInit(params: GridOptions): void {
    this.params = params;
    this.params.api.addEventListener('modelUpdated', this.onModelUpdate.bind(this));
  }

  public onModelUpdate(): void {
    this.count = this.params.api.getModel().getRowCount();
  }
}

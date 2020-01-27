import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-selected-counter',
  templateUrl: './selected-counter.component.html',
  styleUrls: ['./selected-counter.component.scss']
})
export class SelectedCounterComponent {
  public count = 0;
  private params: GridOptions;

  public agInit(params: GridOptions): void {
    this.params = params;
    this.params.api.addEventListener('selectionChanged', this.onSelectionChange.bind(this));
  }

  public onSelectionChange(): void {
    this.count = this.params.api.getSelectedRows().length;
  }
}

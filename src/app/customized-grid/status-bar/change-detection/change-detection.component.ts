import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss']
})
export class ChangeDetectionComponent {
  public selectedNodes = [];
  public isVisible: boolean;

  private params: GridOptions;

  public agInit(params: GridOptions): void {
    this.isVisible = true;
    this.params = params;
  }

  public onChange(event: MouseEvent): void {
    event.preventDefault();
    this.isVisible = this.getCurrentVisibility();

    if (this.isVisible) {
      this.selectedNodes = this.params.api.getSelectedNodes();
      this.params.api.deselectAll();
    } else {
      this.selectedNodes.forEach((node) => node.setSelected(true));
    }
    this.setColumnVisibility('selection', !this.isVisible);
  }

  private getCurrentVisibility(): boolean {
    return this.params.columnApi.getColumn('selection').isVisible();
  }

  private setColumnVisibility(columnKey: string, visible: boolean): void {
    this.params.columnApi.setColumnVisible(columnKey, visible);
  }
}

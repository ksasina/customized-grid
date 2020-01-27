import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

import { GetContextMenuItemsParams, GridOptions } from 'ag-grid-community';
import { CheckboxComponent } from './cell-controls/checkbox/checkbox.component';
import { descriptionColumn } from './shared/column-defs/description-column';
import { publishedAtColumn } from './shared/column-defs/published-at-column';
import { selectionColumn } from './shared/column-defs/selection-column';
import { thumbnailColumn } from './shared/column-defs/thumbnail-column';
import { titleColumn } from './shared/column-defs/title-column';
import { CustomizedGridService } from './shared/customized-grid.service';
import { IViewItem } from './shared/models';
import { ChangeDetectionComponent } from './status-bar/change-detection/change-detection.component';
import { CounterComponent } from './status-bar/counter/counter.component';
import { SelectedCounterComponent } from './status-bar/selected-counter/selected-counter.component';

@Component({
  selector: 'app-customized-grid',
  templateUrl: './customized-grid.component.html',
  styleUrls: ['./customized-grid.component.scss']
})
export class CustomizedGridComponent implements OnInit {
  @ViewChild('agGrid', { static: true })
  public agGrid: AgGridAngular;

  public rowData: IViewItem[];

  public gridOptions: GridOptions = {
    paginationAutoPageSize: true,
    suppressCellSelection: true,
    defaultColDef: {
      sortable: true,
      resizable: true,
      filter: true,
    },
    rowHeight: 90,
    columnDefs: [
      selectionColumn,
      thumbnailColumn,
      publishedAtColumn,
      titleColumn,
      descriptionColumn,
    ],
    suppressRowClickSelection: true,
    statusBar: {
      statusPanels: [
        { statusPanel: 'selectionToggleComponent' },
        { statusPanel: 'countStatusBarComponent' },
        { statusPanel: 'countSelectedRecordsComponent' }]
    },
    frameworkComponents: {
      countStatusBarComponent: CounterComponent,
      countSelectedRecordsComponent: SelectedCounterComponent,
      selectionToggleComponent: ChangeDetectionComponent,
      agColumnHeader: CheckboxComponent,
    },
    rowSelection: 'multiple',
    popupParent: document.querySelector('body'),
    getContextMenuItems: (item) => this.getContextMenuItems(item),
    context: this
  };

  constructor(private _customizedGridService: CustomizedGridService) { }

  public ngOnInit() {
    this._customizedGridService.getData().subscribe((items) => {
      this.rowData = items;
    });
  }

  public getContextMenuItems(item: GetContextMenuItemsParams) {
    const openInNewTabItem = {
      name: 'Open in new tab',
      shortcut: 'Ctrl+Shift+Click',
      icon: '<img src="assets/external-link.svg" alt="Magic">',
      action: () => window.open(`https://www.youtube.com/watch?v=${item.node.data.videoId}`, '_blank')
    };
    return [
      'copy',
      'copyWithHeaders',
      'paste',
      'separator',
      openInNewTabItem
    ];
  }

  public onGridReady(): void {
    this.agGrid.api.sizeColumnsToFit();
  }
}

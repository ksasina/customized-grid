import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-checkbox-cell',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  public get isCheckboxVisible(): boolean {
    const { headerComponentParams } = this.params.column.colDef;
    return typeof headerComponentParams === 'function' ? headerComponentParams(this.params) : false;
  }

  @ViewChild('menuButton', { read: ElementRef, static: false })
  public menuButton: ElementRef;

  public params: any;
  public ascSort: string;
  public descSort: string;
  public noSort: string;
  public selectAll = false;

  public agInit(params: any): void {
    this.params = params;
    params.column.addEventListener('sortChanged', this.onSortChanged.bind(this));
    params.api.addEventListener('selectionChanged', this.onSelectionChanged.bind(this));
  }

  public onMenuClicked(): void {
    this.params.showColumnMenu(this.menuButton.nativeElement);
  }

  public onSortChanged(): void {
    this.ascSort = this.descSort = this.noSort = 'inactive';

    if (this.params.column.isSortAscending()) {
      this.ascSort = 'active';
    } else if (this.params.column.isSortDescending()) {
      this.descSort = 'active';
    } else {
      this.noSort = 'active';
    }
  }

  public onSelectionChanged(): void {
    this.selectAll = this.params.api.getSelectedRows().length === this.params.api.getDisplayedRowCount();
  }

  public onSortRequested(order: string, event: MouseEvent): void {
    this.params.setSort(order, event.shiftKey);
  }

  public onChange(event: MouseEvent): void {
    event.preventDefault();
    this.selectAll ? this.params.api.selectAll() : this.params.api.deselectAll();
  }
}

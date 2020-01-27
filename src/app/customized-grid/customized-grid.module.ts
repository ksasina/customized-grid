import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

import { CheckboxComponent } from './cell-controls/checkbox/checkbox.component';
import { DateComponent } from './cell-controls/date/date.component';
import { ImageComponent } from './cell-controls/image/image.component';
import { LinkComponent } from './cell-controls/link/link.component';
import { CustomizedGridComponent } from './customized-grid.component';
import { ChangeDetectionComponent } from './status-bar/change-detection/change-detection.component';
import { CounterComponent } from './status-bar/counter/counter.component';
import { SelectedCounterComponent } from './status-bar/selected-counter/selected-counter.component';

const agGridComponents = [
  CounterComponent,
  SelectedCounterComponent,
  ChangeDetectionComponent,
  CheckboxComponent,
  LinkComponent,
  DateComponent,
  ImageComponent,
];

@NgModule({
  declarations: [CustomizedGridComponent, ...agGridComponents],
  imports: [CommonModule, HttpClientModule, FormsModule, AgGridModule.withComponents(agGridComponents)],
  exports: [CustomizedGridComponent]
})
export class CustomizedGridModule { }

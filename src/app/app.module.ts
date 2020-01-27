import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomizedGridModule } from './customized-grid/customized-grid.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CustomizedGridModule],
    bootstrap: [AppComponent]
})
export class AppModule { }

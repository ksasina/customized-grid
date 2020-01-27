import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { AgGridModule } from 'ag-grid-angular';
import { of } from 'rxjs';

import { CheckboxComponent } from './cell-controls/checkbox/checkbox.component';
import { DateComponent } from './cell-controls/date/date.component';
import { ImageComponent } from './cell-controls/image/image.component';
import { LinkComponent } from './cell-controls/link/link.component';
import { CustomizedGridComponent } from './customized-grid.component';
import { IViewItem } from './shared/IViewItem.model';
import { CustomizedGridService } from './shared/customized-grid.service';
import { ChangeDetectionComponent } from './status-bar/change-detection/change-detection.component';
import { CounterComponent } from './status-bar/counter/counter.component';
import { SelectedCounterComponent } from './status-bar/selected-counter/selected-counter.component';

describe('Customized Grid Component', () => {
    let component: CustomizedGridComponent;
    let fixture: ComponentFixture<CustomizedGridComponent>;

    const stubResponse: IViewItem[] =
        [{
            title: 'Lil Wayne - John (Explicit) ft. Rick Ross',
            publishedAt: '2011-05-12T20:01:31.000Z',
            description: 'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.',
            thumbnail: 'https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg',
            videoId: '3fumBcKC6RE'
        }, {
            title: 'John Legend - All of Me (Edited Video)',
            publishedAt: '2013-10-02T14:00:06.000Z',
            description: `John Legend's official music video for 'All Of Me'.`,
            thumbnail: 'https://i.ytimg.com/vi/450p7goxZqg/default.jpg',
            videoId: '450p7goxZqg'
        }];

    const mockCustomizedGridService = jasmine.createSpyObj<CustomizedGridService>('CustomizedGridService', {
        getData: of(stubResponse)
    });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CustomizedGridComponent,
                CounterComponent,
                SelectedCounterComponent,
                ChangeDetectionComponent,
                CheckboxComponent,
                LinkComponent,
                DateComponent,
                ImageComponent],
            providers: [{
                provide: CustomizedGridService, useValue: mockCustomizedGridService
            }],
            imports: [
                BrowserTestingModule,
                FormsModule,
                AgGridModule.withComponents([
                    CounterComponent,
                    SelectedCounterComponent,
                    ChangeDetectionComponent,
                    CheckboxComponent,
                    LinkComponent,
                    DateComponent,
                    ImageComponent])]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomizedGridComponent);
        component = fixture.componentInstance;

        spyOn(component, 'onGridReady');
        fixture.detectChanges();
    });

    it('should create Customized grid component', () => {
        expect(component).toBeTruthy();
    });

    it('grid API is available', () => {
        expect(component.gridOptions.api).toBeTruthy();
    });

    it('the grid cells should be displayed', () => {
        const appElement = fixture.nativeElement;
        const cellElements = appElement.querySelectorAll('.ag-cell-value');

        expect(cellElements.length).toEqual(8);
    });
});

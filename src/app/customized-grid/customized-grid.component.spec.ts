// import { CustomizedGridComponent } from './customized-grid.component';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { FormsModule } from '@angular/forms';
// import { BrowserTestingModule } from '@angular/platform-browser/testing';
// import { AgGridModule } from 'ag-grid-angular';
// import { of } from 'rxjs';
// import { CheckboxComponent } from './cell-renderers/checkbox/checkbox.component';
// import { DateComponent } from './cell-renderers/date/date.component';
// import { ImageComponent } from './cell-renderers/image/image.component';
// import { LinkComponent } from './cell-renderers/link/link.component';
// import { ViewItem } from './shared/models';
// import { TableGridHelperService } from './shared/table-grid-helper.service';
// import { TableGridService } from './shared/customized-grid.service';
// import { RecordsCountComponent } from './status-bars/counter/counter.component';
// import { SelectedRecordsCountComponent } from './status-bars/selected-counter/selected-counter.component';
// import { SelectionToggleComponent } from './status-bars/selection-toggle/selection-toggle.component';

// describe('GridComponent', () => {
//   let component: CustomizedGridComponent;
//   let fixture: ComponentFixture<CustomizedGridComponent>;

//   const mockResponse: ViewItem[] =
//     [
//       {
//         title: 'Lil Wayne - John (Explicit) ft. Rick Ross',
//         publishedAt: '2011-05-12T20:01:31.000Z',
//         description: 'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.',
//         thumbnail: 'https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg',
//         videoId: '3fumBcKC6RE'
//       },
//       {
//         title: 'John Legend - All of Me (Edited Video)',
//         publishedAt: '2013-10-02T14:00:06.000Z',
//         description: "John Legend's official music video for 'All Of Me'. Click to listen to John Legend on Spotify: http://smarturl.it/JohnLSpotify?IQid=... As featured on Love In The ...",
//         thumbnail: 'https://i.ytimg.com/vi/450p7goxZqg/default.jpg',
//         videoId: '450p7goxZqg'
//       }
//     ];

//   const mockSearchListService = jasmine.createSpyObj<TableGridService>('TableGridService', {
//     getSomeStoreData: of(mockResponse)
//   });

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         CustomizedGridComponent,
//         RecordsCountComponent,
//         SelectedRecordsCountComponent,
//         SelectionToggleComponent,
//         CheckboxComponent,
//         LinkComponent,
//         DateComponent,
//         ImageComponent],
//       providers: [
//         {
//           provide: TableGridService,
//           useValue: mockSearchListService
//         },
//         {
//           provide: TableGridHelperService,
//           useValue: { getVideoUrlById: () => '' }
//         }
//       ],
//       imports: [
//         BrowserTestingModule,
//         FormsModule,
//         AgGridModule.withComponents([
//           RecordsCountComponent,
//           SelectedRecordsCountComponent,
//           SelectionToggleComponent,
//           CheckboxComponent,
//           LinkComponent,
//           DateComponent,
//           ImageComponent])
//       ]
//     })
//       .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CustomizedGridComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('grid API is available', () => {
//     expect(component.gridOptions.api).toBeTruthy();
//   });

//   it('the grid cells should be displayed', () => {
//     const appElement = fixture.nativeElement;
//     const cellElements = appElement.querySelectorAll('.ag-cell-value');
//     expect(cellElements.length).toEqual(8);
//     expect(cellElements[3].textContent)
//       .toEqual('Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.');
//   });
// });

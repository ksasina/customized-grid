import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call CustomizedGridComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.nativeElement.querySelector('app-customized-grid') as HTMLElement;
    expect(app.tagName.toLowerCase()).toBe('app-customized-grid');
  });
});

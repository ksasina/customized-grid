import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SelectedCounterComponent } from './selected-counter.component';

describe('SelectedCounter', () => {
    let component: SelectedCounterComponent;
    let fixture: ComponentFixture<SelectedCounterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SelectedCounterComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SelectedCounterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });

    it('should set count', () => {
        component.count = 10;
        fixture.detectChanges();

        const counter = fixture.debugElement.queryAll(By.css('.ag-name-value-value'))[0].nativeElement.textContent;
        expect(counter).toBe('10');
    });
});

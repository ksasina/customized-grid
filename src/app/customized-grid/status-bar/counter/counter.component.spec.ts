import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
    let component: CounterComponent;
    let fixture: ComponentFixture<CounterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CounterComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CounterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should set component', () => {
        expect(component).toBeTruthy();
    });

    it('should set count', () => {
        component.count = 10;
        fixture.detectChanges();

        const counter = fixture.debugElement.queryAll(By.css('.ag-name-value-value'))[0].nativeElement.textContent;
        expect(counter).toBe('10');
    });
});

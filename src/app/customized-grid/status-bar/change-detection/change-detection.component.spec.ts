import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ChangeDetectionComponent } from './change-detection.component';

describe('Change detection component', () => {
    let component: ChangeDetectionComponent;
    let fixture: ComponentFixture<ChangeDetectionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChangeDetectionComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChangeDetectionComponent);
        component = fixture.componentInstance;

        spyOn(component, 'onChange');
        fixture.detectChanges();
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });

    it('should set isVisible', () => {
        component.isVisible = true;
        fixture.detectChanges();

        const counter = fixture.debugElement.queryAll(By.css('input'))[0].nativeElement;
        expect(counter.checked).toBeFalsy();
    });

    it('should be able to click on the component', () => {
        const divElement = fixture.debugElement.query((By.css('.ag-name-value')));
        divElement.triggerEventHandler('click', new Event('click'));

        fixture.whenStable().then(() => {
            expect(component.onChange).toHaveBeenCalled();
        });
    });
});

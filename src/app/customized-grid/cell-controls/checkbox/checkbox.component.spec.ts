import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { CheckboxComponent } from './checkbox.component';

xdescribe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxComponent],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    component.params = {
      column: {} as any
    } as any;
    fixture = TestBed.createComponent(CheckboxComponent);
    fixture.componentInstance.params = {
      column: {} as any
    } as any;
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to call onMenuClicked', () => {
    const divElement = fixture.debugElement.query((By.css('.customHeaderMenuButton')));
    divElement.triggerEventHandler('click', new Event('click'));

    fixture.whenStable().then(() => {
      expect(component.onMenuClicked).toHaveBeenCalled();
    });
  });

  it('should be able to call onSortRequested with params', () => {
    const divElement = fixture.debugElement.query((By.css('.customSortDownLabel')));
    divElement.triggerEventHandler('click', new Event('click'));

    fixture.whenStable().then(() => {
      expect(component.onSortRequested).toHaveBeenCalledWith('asc', Event);
    });
  });

});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LinkComponent } from './link.component';

describe('LinkComponent', () => {
  let component: LinkComponent;
  let fixture: ComponentFixture<LinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LinkComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    component.title = 'Title';
    fixture.detectChanges();

    const title = fixture.debugElement.queryAll(By.css('a'));
    expect(title[0].nativeElement.text).toBe('Title');
  });

  it('should set url', () => {
    component.url = 'testUrl';
    fixture.detectChanges();

    const url = fixture.debugElement.queryAll(By.css('a'));
    expect(url[0].nativeElement.href).toBe(`http://${url[0].nativeElement.host}/testUrl`);
  });
});

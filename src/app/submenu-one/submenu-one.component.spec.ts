import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmenuOneComponent } from './submenu-one.component';

describe('SubmenuOneComponent', () => {
  let component: SubmenuOneComponent;
  let fixture: ComponentFixture<SubmenuOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmenuOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmenuOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

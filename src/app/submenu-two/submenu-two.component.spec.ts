import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmenuTwoComponent } from './submenu-two.component';

describe('SubmenuTwoComponent', () => {
  let component: SubmenuTwoComponent;
  let fixture: ComponentFixture<SubmenuTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmenuTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmenuTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

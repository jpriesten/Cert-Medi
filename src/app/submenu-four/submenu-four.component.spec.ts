import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmenuFourComponent } from './submenu-four.component';

describe('SubmenuFourComponent', () => {
  let component: SubmenuFourComponent;
  let fixture: ComponentFixture<SubmenuFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmenuFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmenuFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

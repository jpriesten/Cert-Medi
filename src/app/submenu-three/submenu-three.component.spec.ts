import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmenuThreeComponent } from './submenu-three.component';

describe('SubmenuThreeComponent', () => {
  let component: SubmenuThreeComponent;
  let fixture: ComponentFixture<SubmenuThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmenuThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmenuThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

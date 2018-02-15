import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAdvicetListComponent } from './section-advicet-list.component';

describe('SectionAdvicetListComponent', () => {
  let component: SectionAdvicetListComponent;
  let fixture: ComponentFixture<SectionAdvicetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionAdvicetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAdvicetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

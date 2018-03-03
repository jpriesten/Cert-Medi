import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOurServicesComponent } from './section-our-services.component';

describe('SectionOurServicesComponent', () => {
  let component: SectionOurServicesComponent;
  let fixture: ComponentFixture<SectionOurServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionOurServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOurServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

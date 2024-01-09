import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentHeaderComponent } from './incident-header.component';

describe('IncidentHeaderComponent', () => {
  let component: IncidentHeaderComponent;
  let fixture: ComponentFixture<IncidentHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncidentHeaderComponent]
    });
    fixture = TestBed.createComponent(IncidentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

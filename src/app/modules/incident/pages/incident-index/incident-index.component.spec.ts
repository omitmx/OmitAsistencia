import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentIndexComponent } from './incident-index.component';

describe('IncidentIndexComponent', () => {
  let component: IncidentIndexComponent;
  let fixture: ComponentFixture<IncidentIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncidentIndexComponent]
    });
    fixture = TestBed.createComponent(IncidentIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

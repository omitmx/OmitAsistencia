import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDialogAddComponent } from './company-dialog-add.component';

describe('CompanyDialogAddComponent', () => {
  let component: CompanyDialogAddComponent;
  let fixture: ComponentFixture<CompanyDialogAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyDialogAddComponent]
    });
    fixture = TestBed.createComponent(CompanyDialogAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

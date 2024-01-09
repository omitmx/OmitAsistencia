import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToasterComponent } from '../../modules/msg/toaster/toaster.component';
import { EventTypes } from 'src/app/core/models/toast/event-types';

describe('ToasterComponent', () => {
  let component: ToasterComponent;
  let fixture: ComponentFixture<ToasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToasterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should remove toasts on dispose', () => {
    // given
    component.currentToasts = [
      {
        type: EventTypes.Info,
        title: 'info',
        message: 'info',
      },
    ];

    // when
    component.dispose(0);

    // then
    expect(component.currentToasts).toEqual([]);
  });
});

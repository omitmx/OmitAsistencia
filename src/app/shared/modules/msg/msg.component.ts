import { Component } from '@angular/core';
import { EventTypes } from 'src/app/core/models/toast/event-types';
import { ToastService } from 'src/app/core/services/common/toast.services';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.scss']
})
export class MsgComponent {
  title = 'angular-bootstrap-toast-service';

  EventTypes = EventTypes;

  constructor(private toastService: ToastService) {}

  showToast(type: EventTypes) {
    switch (type) {
      case EventTypes.Success:
        this.toastService.showSuccessToast('Success toast title', 'This is a success toast message.');
        break;
      case EventTypes.Warning:
        this.toastService.showWarningToast('Warning toast title', 'This is a warning toast message.');
        break;
      case EventTypes.Error:
        this.toastService.showErrorToast('Error toast title', 'This is an error toast message.');
        break;
      default:
        this.toastService.showInfoToast('Info toast title', 'This is an info toast message.');
        break;
    }
  }
}

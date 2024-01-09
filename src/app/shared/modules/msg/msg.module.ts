import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MsgComponent } from './msg.component';
import { ToastComponent } from './toast/toast.component';
import { ToasterComponent } from './toaster/toaster.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    MsgComponent, ToastComponent, ToasterComponent
  ],
  imports: [
    CommonModule, MatIconModule//,AppRoutingModule
  ],
  exports:[ToasterComponent],
  bootstrap:[MsgComponent],
})
export class MsgModule { }

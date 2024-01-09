import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'app-index-content',
  templateUrl: './index-content.component.html',
  styleUrls: ['./index-content.component.scss'],
  standalone:true,
})
export class IndexContentComponent  implements OnInit  {
  Fecha:String = '';
  Hora:String = '';
  currentTime: Date | undefined;
  constructor() {

  }
  ngOnInit() {
    setInterval(() => {
      this.currentTime = new Date();      
      this.Fecha = format(this.currentTime , 'dd/MM/yyyy');
      this.Hora = format(this.currentTime , 'HH:mm:ss');
    }, 1000);
  }
}

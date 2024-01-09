import { Component } from '@angular/core';
import { EmployeeHeaderComponent } from '../../components/employee-header/employee-header.component';
import { EmployeeListComponent } from '../../components/employee-list/employee-list.component';

@Component({
  selector: 'app-employee-index',
  templateUrl: './employee-index.component.html',
  styleUrls: ['./employee-index.component.scss'],
  standalone:true,
  imports:[EmployeeHeaderComponent,EmployeeListComponent]
})
export class EmployeeIndexComponent {

}

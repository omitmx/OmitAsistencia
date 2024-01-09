import { Component } from '@angular/core';
import { CompanyHeaderComponent } from '../../components/company-header/company-header.component';
import { CompanyListComponent } from '../../components/company-list/company-list.component';

@Component({
  selector: 'app-company-index',
  templateUrl: './company-index.component.html',
  styleUrls: ['./company-index.component.scss'],
  standalone:true,
  imports:[CompanyHeaderComponent,CompanyListComponent]
})
export class CompanyIndexComponent {

}

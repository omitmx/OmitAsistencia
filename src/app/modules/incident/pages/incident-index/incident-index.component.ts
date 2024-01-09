import { Component, OnInit } from '@angular/core';
import { IncidentHeaderComponent } from '../../components/incident-header/incident-header.component';
import { IncidentListComponent } from '../../components/incident-list/incident-list.component';

@Component({
  selector: 'app-incident-index',
  templateUrl: './incident-index.component.html',
  styleUrls: ['./incident-index.component.scss'],
  standalone: true,
  imports:[IncidentHeaderComponent,IncidentListComponent],
  
})
export class IncidentIndexComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {}
}

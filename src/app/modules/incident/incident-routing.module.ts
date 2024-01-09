import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentComponent } from './incident.component';
import { IncidentIndexComponent } from './pages/incident-index/incident-index.component';

const routes: Routes = [
  {
    path: '',
    component: IncidentComponent, 
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'index', component: IncidentIndexComponent },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncidentRoutingModule { }

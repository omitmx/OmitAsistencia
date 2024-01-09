import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeIndexComponent } from './pages/employee-index/employee-index.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent, 
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'index', component: EmployeeIndexComponent },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule { }

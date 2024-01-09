import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  {
    path: 'principal',
    component: LayoutComponent,
    loadChildren: () => import('../principal/principal.module').then((m) => m.PrincipalModule), canActivate: [AuthGuard]
  }, 
  {
    path: 'incident',
    component: LayoutComponent,
    loadChildren: () => import('../incident/incident.module').then((m) => m.IncidentModule), canActivate: [AuthGuard]
  }, 
  {
    path: 'employee',
    component: LayoutComponent,
    loadChildren: () => import('../employee/employee.module').then((m) => m.EmployeeModule), canActivate: [AuthGuard]
  }, 
  {
    path: 'company',
    component: LayoutComponent,
    loadChildren: () => import('../company/company.module').then((m) => m.CompanyModule), canActivate: [AuthGuard]
  }, 
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}

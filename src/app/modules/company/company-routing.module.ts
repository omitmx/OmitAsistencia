import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CompanyIndexComponent } from './pages/company-index/company-index.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent, 
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'index', component: CompanyIndexComponent },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthModule } from './modules/auth/auth.module';
const routes: Routes = [
 /* {
    path: '',
    loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule), canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule), canActivate: [AuthGuard]
  },*/
  {
    path: '',
    loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule), canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
 
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),AuthModule],
  exports: [RouterModule],
})
export class AppRoutingModule {} 

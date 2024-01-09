import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { NewPasswordComponent } from './pages/new-password/new-password.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { TwoStepsComponent } from './pages/two-steps/two-steps.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
      { path: 'sign-in', component: SignInComponent, data: { returnUrl: window.location.pathname } },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'recovery-password', component: ForgotPasswordComponent },    
      { path: 'new-password', component: NewPasswordComponent },
      { path: 'two-steps', component: TwoStepsComponent },
      { path: '**', redirectTo: 'sign-in', pathMatch: 'full' },
    ],
  },
 
];
const routesRoot: Routes = [
  {
    path: 'principal',
    loadChildren: () => import('../../modules/layout/layout.module').then((m) => m.LayoutModule), canActivate: [AuthGuard]
  },  
  {path:'auth', children: routes},
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routesRoot)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

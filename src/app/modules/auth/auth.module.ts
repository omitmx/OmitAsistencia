import { NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthRoutingModule } from './auth-routing.module';
import { JwtInterceptor } from 'src/app/core/interceptor/jwt.interceptor';

@NgModule({
  //declarations:[ToastComponent, ToasterComponent],
  declarations:[],
  providers:[
    { provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor, multi:true}
  ],
  imports: [AuthRoutingModule, HttpClientModule, AngularSvgIconModule.forRoot()],
})
export class AuthModule {}

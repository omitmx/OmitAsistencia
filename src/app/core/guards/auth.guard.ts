import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { ApiSesionService } from '../services/api/sesion/api.sesion.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private apiacceso: ApiSesionService) {

  }
  canActivate(route: ActivatedRouteSnapshot) {
    const oUsu=this.apiacceso.UsuarioData;
    if(oUsu!=null){
      if(oUsu.token!=''){
        
       //console.log('token gard usuario:', oUsu.token);
        return true;
      }
    }
    this.router.navigate(['/auth']);
    return false;
  }
}

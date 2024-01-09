import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { vmResponse } from '../../../models/vmResponse';
import { vmUsuEnSesion } from 'src/app/core/models/sesion/vmusuario.en.sesion';
import { ConfigService } from '../../config.service';
const httpOption = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ApiSesionService {
  private url_api: any;// string = ConfigService+'Sesiones/login';
  private oUsuarioSubject = new BehaviorSubject<vmUsuEnSesion| null>(null);
  public get UsuarioData():vmUsuEnSesion|null{
    return this.oUsuarioSubject.value;
  }
  constructor(private _http: HttpClient,private configService: ConfigService) {
    const storedUser = localStorage.getItem('usuario');//recupera el obj de usuario que tiene el token
    const initialUser = storedUser ? JSON.parse(storedUser) as vmUsuEnSesion : null;
    this.oUsuarioSubject = new BehaviorSubject<vmUsuEnSesion | null>(initialUser);
    this.url_api=this.configService.configUrl;
    
  }
  
  getSesionUsuario(login: string,pwd: string): Observable<vmResponse> {
     // Mostrar los datos del usuario en la consola (opcional)
    let  url =  this.url_api+'Sesiones/login';
    return this._http.post<vmResponse>(url, {login,pwd}, httpOption).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(error); // retrona error a component
      }),
      map(res => {
        
        if (res.resultado === 1) {         
          const oUsuario = JSON.parse(res.data) as vmUsuEnSesion ;
          localStorage.setItem('usuario', JSON.stringify(oUsuario));
          this.oUsuarioSubject.next(oUsuario);
        }
        return res;
      })
    );
  }
 
  logout(){
    console.log("oUsuario", "salida de sesion");
    localStorage.removeItem('usuario');
    this.oUsuarioSubject.next(null);
  }
}

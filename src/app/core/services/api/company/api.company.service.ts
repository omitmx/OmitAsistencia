import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { vmUsuEnSesion } from 'src/app/core/models/sesion/vmusuario.en.sesion';
import { ConfigService } from '../../config.service';
import { vmResponse } from 'src/app/core/models/vmResponse';
import { vmCompanyAdd } from 'src/app/modules/company/models/vmCompanyAdd';
const httpOption = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ApiCompanyService {
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
  
  getListEmpresas(id: number): Observable<vmResponse> {
     // Mostrar los datos del usuario en la consola (opcional)
    let  url =  this.url_api+'Empresas/GetEmpresas?id='+id;
    //console.log('url:::',  url );
    return this._http.get<vmResponse>(url, httpOption).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(error); // retrona error a component
      })
    );
  }

  add(model: vmCompanyAdd): Observable<vmResponse> {
    let  url =  this.url_api+'Empresas/SetEmpresa';
    console.log('url:::',  url );
    return this._http.post<vmResponse>(url,model, httpOption).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(error); // retrona error a component
      })
    );    
  }
  
  edit(model: vmCompanyAdd): Observable<vmResponse> {
    let  url =  this.url_api+'Empresas/SetEmpresa';
    //console.log('url:::',  url );
    return this._http.post<vmResponse>(url,model, httpOption).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(error); // retrona error a component
      })
    );    
  }
}

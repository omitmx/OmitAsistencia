import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiSesionService } from "../services/api/sesion/api.sesion.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor{
    constructor(private apiacceso: ApiSesionService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const oUsuario= this.apiacceso.UsuarioData;
       
       if(oUsuario!=null){
           const usuToken:String=oUsuario.token??'';
           req=  req.clone({
                setHeaders:{Authorization:`Bearer ${usuToken}`},
            });
       }
       return next.handle(req);
    } 

   

}
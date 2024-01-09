import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { vmUsuSesion } from 'src/app/core/models/sesion/vmususesion';
import { ApiSesionService } from 'src/app/core/services/api/sesion/api.sesion.service';
import { ToastService } from 'src/app/core/services/common/toast.services';
import { MsgModule } from 'src/app/shared/modules/msg/msg.module';
@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterLink,
        AngularSvgIconModule,
        NgClass,
        NgIf,MsgModule
    ],
})
export class SignInComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  public o_usuario!: vmUsuSesion;
  constructor(private apiacceso: ApiSesionService,private toastService: ToastService,
    private readonly _formBuilder: FormBuilder, private readonly _router: Router) {

    //quitar eso despues del test
    //this.apiacceso.logout();
    if(this.apiacceso.UsuarioData){
      this._router.navigate(['principal']); 
    }
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      usuario: ['', [Validators.required]],
      pwd: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

 /* onSubmit() { 
    this.submitted = true;
    const { usuario, pwd } = this.form.value;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    this.apiacceso.getSesionUsuario(usuario,pwd,'CITELUM MEXICO 2014').subscribe(res=>{
      if(res.resultado===1){
        this._router.navigate(['/']);
      }
    });
   console.log('creacion sesion usuario:',  window.location.pathname );
    this._router.navigate(['/']);
    console.log('creacion sesion usuarioss1:',  window.location.pathname );

  }*/

  onSubmit() {
    this.submitted = true; 
    if (this.form.invalid) {
      return;
    }
    const { usuario, pwd } = this.form.value;
  
    this.apiacceso.getSesionUsuario(usuario, pwd)
      .subscribe(
        (res) => {
          if (res.resultado === 1) {
          
            this._router.navigate(['/principal']); // Navegar a la ruta principal si el inicio de sesión es exitoso
          } else {
            // Manejar errores o mostrar mensajes de error al usuario si el inicio de sesión falla
            this.toastService.showInfoToast('Aviso', 'Usuario y/o contraseña incorrecta..!');
            console.log('sesion:',  'Usuario y/o contraseña incorrecta..!' );
            this._router.navigate(['/forgot-password']); // Navegar a la ruta principal si el inicio de sesión es exitoso
          }
        },
        (error) => {
          // Manejar errores de la solicitud HTTP, como mostrar un mensaje de error al usuario
          
          this.toastService.showErrorToast('Error toast title', 'Favor de intentar de nuevo..!');
          // También puedes mostrar un mensaje de error al usuario aquí
        }
      );
  }
  
}

import { Component, OnInit,Inject  } from '@angular/core';
import { MAT_DIALOG_DATA,  MatDialogRef } from '@angular/material/dialog';
import { ApiCompanyService } from 'src/app/core/services/api/company/api.company.service';
import { ToastService } from 'src/app/core/services/common/toast.services';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, FormsModule,  ReactiveFormsModule,  Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgFor ,NgClass, NgIf} from '@angular/common';
import { vmCompanyAdd } from '../../models/vmCompanyAdd';

@Component({
  selector: 'app-company-dialog-add',
  templateUrl: './company-dialog-add.component.html',
  styleUrls: ['./company-dialog-add.component.scss'],
  standalone:true,
  imports: [NgFor,NgClass,NgIf,AngularSvgIconModule,MatFormFieldModule,FormsModule,MatInputModule,ReactiveFormsModule]
})
export class CompanyDialogAddComponent implements OnInit {

  readonly width: String='300px';
  public submitted = false;
  public oCompany: vmCompanyAdd;
  // public addform =new FormGroup({
  //     id: new FormControl('',[]),
  //     empresa: new FormControl('',[Validators.required]),
  //     razon_social: new FormControl('',[Validators.required]),
  //     direccion_fiscal:  new FormControl('',[Validators.required]),
  //     rfc:  new FormControl('',[Validators.required]),
  //     cp:  new FormControl('',[Validators.required]),
  //     ciudad:  new FormControl('',[Validators.required]),
  //     logo : new FormControl('',[]),
  //     url_logo:  new FormControl('',[]),
  //     baja:  new FormControl('',[]),
  // });
  public addform = this._formBuilder.group({
    id: [-1,[]],
    empresa: ['',[Validators.required]],
    razon_social: ['',[Validators.required]],
    direccion_fiscal:  ['',[Validators.required]],
    rfc: ['',[Validators.required]],
    cp: [-1,[Validators.required]],
    ciudad:  ['',[Validators.required]],
    logo : ['',[]],
    url_logo:  ['',[]],
    baja:[0,[]],
});

  constructor(public dialogRef: MatDialogRef<CompanyDialogAddComponent>,private readonly _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public _oCompany: vmCompanyAdd
  ,private api: ApiCompanyService, private toastService: ToastService ){

   if(_oCompany!=null){
      console.log('empresa:++',  _oCompany );
      this.addform.patchValue({
        id:_oCompany.id,
        empresa:_oCompany.empresa,
        razon_social:_oCompany.razon_social,
        direccion_fiscal:_oCompany.direccion_fiscal,
        rfc:_oCompany.rfc,
        cp: _oCompany.cp,
        ciudad:_oCompany.ciudad,
        logo:_oCompany.logo,
        url_logo:_oCompany.url_logo,
        baja: _oCompany.baja
      });

   // this.oCompany=_oCompany;
    this.oCompany={
      id:_oCompany.id,
      empresa:_oCompany.empresa,
      razon_social:_oCompany.razon_social,
      direccion_fiscal:_oCompany.direccion_fiscal,
      rfc:_oCompany.rfc,
      cp: _oCompany.cp,
      ciudad:_oCompany.ciudad,
      logo:_oCompany.logo,
      url_logo:_oCompany.url_logo,
      baja: _oCompany.baja
     };
   }
  else{
    this.oCompany={
     id:-1,
     empresa:'',
     razon_social:'',
     direccion_fiscal:'',
     rfc:'',
     cp: 0,
     ciudad:'',
     logo:'',
     url_logo:'',
     baja: 0
    };

  }


  }


 ngOnInit(): void {


}
//get para obtener la info de los controles
  get f() {
    return this.addform.controls;
  }

  addCompany(){


    this.submitted = true;

    // const { empresa,razon_social,direccion_fiscal,rfc,cp,ciudad,logo,url_logo,baja } = this.addform.value;
    // console.log('empresa:++',  empresa );

    if (this.addform.invalid) {
      return;
    }
    this.oCompany=  this.addform.value as unknown as vmCompanyAdd
    this.oCompany.id=0;
    this.oCompany.baja=0;
    this.oCompany.url_logo='assets/icons/heroicons/outline/home-modern.svg';
    console.log('form valido:',  this.oCompany);
    if(this.oCompany===null){
      this.toastService.showErrorToast('Alerta','No se ha ingresado la informacion necesaria...!');
      return;
    }
      this.api.add(this.oCompany).subscribe(resp=>{
        console.log('resp:::',  resp);
        if (resp.resultado===1){
          this.toastService.showSuccessToast('Aviso', 'El registro se ha guardado exitosamente...!');
          this.dialogRef.close(this.addform.value);
        }
        else{
          this.toastService.showSuccessToast('Aviso', resp.msg);
        }
      });
  }
  editCompany(){


    this.submitted = true;

    // const { empresa,razon_social,direccion_fiscal,rfc,cp,ciudad,logo,url_logo,baja } = this.addform.value;
    // console.log('empresa:++',  empresa );
    console.log('CRUD',  'editar');
    if (this.addform.invalid) {
      return;
    }
    this.oCompany=  this.addform.value as unknown as vmCompanyAdd
    console.log('form valido:',  this.oCompany);
    if(this.oCompany===null){
      this.toastService.showErrorToast('Alerta','No se ha ingresado la informacion necesaria...!');
      return;
    }
      this.api.edit(this.oCompany).subscribe(resp=>{
        
        if (resp.resultado===1){
          this.toastService.showSuccessToast('Aviso', 'El registro se ha modificado exitosamente...!');
          this.dialogRef.close(this.addform.value);
        }
        else{
          this.toastService.showSuccessToast('Aviso', resp.msg);
        }
      });
  }

  close(){
    this.dialogRef.close();
  }
}

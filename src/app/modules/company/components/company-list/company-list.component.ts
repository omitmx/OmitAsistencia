import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CompanyItemComponent } from '../company-item/company-item.component';
import { vmCompanyInfo } from '../../models/vmCompanyInfo';
import { ApiCompanyService } from 'src/app/core/services/api/company/api.company.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/services/common/toast.services';
import { CompanyDialogAddComponent } from '../company-dialog-add/company-dialog-add.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { vmCompanyAdd } from '../../models/vmCompanyAdd';

@Component({
  selector: '[app-company-list]',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
  standalone:true,
  imports: [NgFor,NgIf,AngularSvgIconModule, CompanyItemComponent,CompanyDialogAddComponent,FormsModule],
})
export class CompanyListComponent  implements OnInit {
  public lstEmpresas: vmCompanyInfo[] = [];

  constructor(private api: ApiCompanyService, private readonly _router: Router,private toastService: ToastService,private dialog: MatDialog) {
      

  }

  ngOnInit(): void {
    this.onLoadInfo(0);
  }

  onclickBuscar(){
    
    this.onLoadInfo(0);

  }

  onclickAdd(){
    
    // const dialogAdd=this.dialog.open(CompanyDialogAddComponent,{width:'300'});
    // dialogAdd.afterClosed().subscribe(res=>{      
    //   this.onLoadInfo(0);
    // });


     
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data =null;

    const dialogRef = this.dialog.open(CompanyDialogAddComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
       data=>{
        this.onLoadInfo(0);
       }
    );    

  }
  onclickEdit(){
    this.onLoadInfo(0);

  }

  onLoadInfo(id: number) {
  
    this.api.getListEmpresas(id)
      .subscribe(
        (res) => {
          console.log('Aviso:',  res );
          if (res.resultado === 1) {
          
            this.lstEmpresas= res.data as vmCompanyInfo[];
            
          } else {
            // Manejar errores o mostrar mensajes de error al usuario si el inicio de sesión falla
            this.toastService.showInfoToast('Aviso', 'Favor de intentarlo de nuevo');
            console.log('Aviso:',  'Favor de intentarlo de nuevo..!' );
            //this._router.navigate(['/forgot-password']); // Navegar a la ruta principal si el inicio de sesión es exitoso
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

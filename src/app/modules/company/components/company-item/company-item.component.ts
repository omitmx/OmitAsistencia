import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { vmCompanyInfo } from '../../models/vmCompanyInfo';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CompanyDialogAddComponent } from '../company-dialog-add/company-dialog-add.component';

@Component({
  selector: '[app-company-item]',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.scss'],
  standalone: true,
  imports: [AngularSvgIconModule, CurrencyPipe],
})
export class CompanyItemComponent implements OnInit {
  @Input() oEmpresa = <vmCompanyInfo>{};

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  OpenEdit(): void{
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data =this.oEmpresa;

    const dialogRef = this.dialog.open(CompanyDialogAddComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
       data=>{
       // this.onLoadInfo(0);
       }
    );    
  }
}

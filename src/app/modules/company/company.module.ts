import { NgModule } from '@angular/core';
import { CompanyRoutingModule } from './company-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  imports: [
    CompanyRoutingModule,MatDialogModule,MatFormFieldModule,FormsModule,MatInputModule,
  ],
 
})
export class CompanyModule { }

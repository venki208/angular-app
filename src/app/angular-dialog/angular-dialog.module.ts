import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { MaterialModule } from '../material.module';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [LoginDialogComponent],
  entryComponents: [
    LoginDialogComponent
  ]

})
export class AngularDialogModule { }

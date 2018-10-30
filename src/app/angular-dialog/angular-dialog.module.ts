import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { MaterialModule } from '../material.module';
import { SignupDialogComponent } from './signup-dialog/signup-dialog.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [LoginDialogComponent, SignupDialogComponent],
  entryComponents: [
    LoginDialogComponent,
    SignupDialogComponent
  ]

})
export class AngularDialogModule { }

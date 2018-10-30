import { Component, OnInit } from '@angular/core';
import { LoginDialogComponent } from '../angular-dialog/login-dialog/login-dialog.component';
import { SignupDialogComponent } from '../angular-dialog/signup-dialog/signup-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  loginModal() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      data: { name: 'India', animal: 'Tiger' }
    });
  }

  signupModal() {
    const dialogRef = this.dialog.open(SignupDialogComponent, {
      data: { name: 'Australia', animal: 'Kangaroes'}
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.scss']
})
export class SignInDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SignInDialogComponent>
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}

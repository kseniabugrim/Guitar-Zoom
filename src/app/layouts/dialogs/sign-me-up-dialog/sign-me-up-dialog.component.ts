import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-sign-me-up-dialog',
  templateUrl: './sign-me-up-dialog.component.html',
  styleUrls: ['./sign-me-up-dialog.component.scss']
})
export class SignMeUpDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SignMeUpDialogComponent>
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}

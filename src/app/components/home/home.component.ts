import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SignInDialogComponent } from '../../layouts/dialogs/sign-in-dialog/sign-in-dialog.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignMeUpDialogComponent } from '../../layouts/dialogs/sign-me-up-dialog/sign-me-up-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  interestArray: string[] = ['Soloing', 'Chords', 'Songs', 'Fletboard', 'Music', 'A Little Bit Of Everything'];
  topForm: FormGroup;
  middleForm: FormGroup;
  isClickedSignMeUp: boolean;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.topForm = new FormGroup({
      level: new FormControl({ value: null, disabled: false }, Validators.required),
    });
    this.middleForm = new FormGroup({
      interest: new FormControl({ value: null, disabled: false }, Validators.required),
    });
  }

  playSongs(): void {
    location.href = 'https://google.com';
  }

  signMeUp(): void {
    this.isClickedSignMeUp = true;
    if (this.topForm.valid && this.middleForm.valid) {
      this.dialog.open(SignMeUpDialogComponent, {
        width: '30%'
      });
    }
  }

  signIn(): void {
    this.dialog.open(SignInDialogComponent, {
      width: '30%'
    });
  }
}

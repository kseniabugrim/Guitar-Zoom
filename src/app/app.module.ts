import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { SignInDialogComponent } from './layouts/dialogs/sign-in-dialog/sign-in-dialog.component';
import { SignMeUpDialogComponent } from './layouts/dialogs/sign-me-up-dialog/sign-me-up-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInDialogComponent,
    SignMeUpDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents: [SignInDialogComponent, SignMeUpDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

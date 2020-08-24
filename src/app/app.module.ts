import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './material/material.module';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ConfirmDeleteModalComponent } from './modals/confirm-delete-modal/confirm-delete-modal.component';
import { AddInformModalComponent } from './modals/add-inform-modal/add-inform-modal.component';
import { PreviewModalComponent } from './modals/preview-modal/preview-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    ConfirmDeleteModalComponent,
    AddInformModalComponent,
    PreviewModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ConfirmDeleteModalComponent,
    AddInformModalComponent,
    PreviewModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

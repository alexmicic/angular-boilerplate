import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HeaderComponent,
    FooterComponent
  ],
  declarations: [HeaderComponent, FooterComponent]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HomepageComponent } from './homepage.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [HomepageComponent]
})
export class HomepageModule { }

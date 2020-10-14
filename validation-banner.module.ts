import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationBannerComponent } from './validation-banner.component';



@NgModule({
  declarations: [
    ValidationBannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ValidationBannerComponent]
})
export class ValidationBannerModule { }

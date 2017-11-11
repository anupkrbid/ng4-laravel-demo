import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
	  HttpClientModule,
    LayoutRoutingModule
  ],
  declarations: [LayoutComponent],
	providers: []
})
export class LayoutModule { }

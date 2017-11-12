import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { afterLoginReducers } from './store/feature.reducers';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { QuoteEffects } from './store/quotes/quote.effects';

@NgModule({
  imports: [
    CommonModule,
	  HttpClientModule,
    LayoutRoutingModule,
    StoreModule.forFeature('afterLogin', afterLoginReducers),
	  EffectsModule.forFeature([QuoteEffects])
  ],
  declarations: [LayoutComponent],
	providers: []
})
export class LayoutModule { }

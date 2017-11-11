import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { QuotesComponent } from './quotes.component';
import { QuotesRoutingModule } from './quotes-routing.module';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
  imports: [
    CommonModule,
	  FormsModule,
	  QuotesRoutingModule
  ],
  declarations: [
  	QuoteComponent,
  	QuotesComponent
  ],
})
export class QuotesModule { }

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { NewQuoteRoutingModule } from './new-quote-routing.module';
import { NewQuoteComponent } from './new-quote.component';

@NgModule({
  imports: [
    CommonModule,
	  FormsModule,
	  NewQuoteRoutingModule
  ],
  declarations: [NewQuoteComponent],
})
export class NewQuoteModule { }

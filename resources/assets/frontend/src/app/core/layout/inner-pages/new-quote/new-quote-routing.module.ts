import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewQuoteComponent } from './new-quote.component';

const routes: Routes = [
	{ path: '', component: NewQuoteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewQuoteRoutingModule { }

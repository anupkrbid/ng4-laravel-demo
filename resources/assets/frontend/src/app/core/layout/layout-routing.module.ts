import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
	{ path: '', component: LayoutComponent, children: [
		{ path: 'quotes', loadChildren: './inner-pages/quotes/quotes.module#QuotesModule'},
		{ path: 'new-quote', loadChildren: './inner-pages/new-quote/new-quote.module#NewQuoteModule'}
	] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
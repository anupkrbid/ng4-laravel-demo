import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuotesComponent } from './quotes/quotes.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'quotes', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'new-quote', component: NewQuoteComponent },
  { path: '**', redirectTo: 'quotes' }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

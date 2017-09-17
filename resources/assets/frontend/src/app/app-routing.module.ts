/**
 * Module to register all routes for this app
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuotesComponent } from './quotes/quotes.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './auth.guard';
import { NotAuthGuard } from './not-auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', canActivate: [ NotAuthGuard ], component: SignInComponent },
  { path: 'sign-up', canActivate: [ NotAuthGuard ], component: SignUpComponent },
  { path: 'quotes', canActivate: [ AuthGuard ], component: QuotesComponent },
  { path: 'new-quote', canActivate: [ AuthGuard ], component: NewQuoteComponent },
  { path: '**', redirectTo: 'sign-in' }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

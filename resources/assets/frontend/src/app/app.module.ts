import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth.guard';
import { AuthInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';
import { HeaderComponent } from './header/header.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { NotAuthGuard } from './not-auth.guard';
import { QuoteComponent } from './quote/quote.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteService } from './quote.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule( {
	declarations : [
		AppComponent,
		HeaderComponent,
		SignInComponent,
		SignUpComponent,
		QuotesComponent,
		QuoteComponent,
		NewQuoteComponent
	],
	imports : [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule
	],
	providers : [
		QuoteService,
		AuthService,
		AuthGuard,
		NotAuthGuard,
		{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
	],
	bootstrap : [ AppComponent ]
} )
export class AppModule { }

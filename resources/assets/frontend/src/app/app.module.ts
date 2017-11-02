import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthEffects } from './store/auth/auth.effects';
import { AuthGuard } from './auth.guard';
import { AuthInterceptorPrev } from './auth.interceptor-prev';
import { AuthService } from './auth.service';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { NotAuthGuard } from './not-auth.guard';
import { QuoteComponent } from './quote/quote.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteService } from './quote.service';
import { reducers } from './store/app.reducers';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule( {
	declarations: [
		AppComponent,
		HeaderComponent,
		SignInComponent,
		SignUpComponent,
		QuotesComponent,
		QuoteComponent,
		NewQuoteComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		StoreModule.forRoot( reducers ),
		EffectsModule.forRoot( [ AuthEffects ] ),
		!environment.production ? StoreDevtoolsModule.instrument() : []
	],
	providers: [
		QuoteService,
		AuthService,
		AuthGuard,
		NotAuthGuard,
		{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorPrev, multi: true }
	],
	bootstrap: [ AppComponent ]
} )
export class AppModule { }

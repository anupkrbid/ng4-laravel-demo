import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteComponent } from './quote/quote.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { QuoteService } from './quote.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { NotAuthGuard} from './not-auth.guard';

@NgModule({
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
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    QuoteService,
    AuthService,
    AuthGuard,
    NotAuthGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

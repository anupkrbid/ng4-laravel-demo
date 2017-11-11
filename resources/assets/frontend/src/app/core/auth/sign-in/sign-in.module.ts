import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { SignInComponent } from './sign-in.component';
import { SignInRoutingModule } from './sign-in-routing.module';

@NgModule({
  imports: [
    CommonModule,
	  FormsModule,
	  SignInRoutingModule
  ],
  declarations: [SignInComponent],
})
export class SignInModule { }

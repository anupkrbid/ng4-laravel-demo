import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AlertComponent } from './alert/alert.component';
import { AuthEffects } from './store/auth/auth.effects';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { environment } from '../../environments/environment';
import { HeaderComponent } from './header/header.component';
import { reducers } from './store/core.reducers';
import { NotAuthGuard } from './auth/not-auth.guard';

@NgModule( {
	imports: [
		CommonModule,
		CoreRoutingModule,
		HttpClientModule,
		StoreModule.forRoot( reducers ),
		EffectsModule.forRoot( [ AuthEffects ] ),
		!environment.production ? StoreDevtoolsModule.instrument() : []
	],
	declarations: [
		AlertComponent,
		CoreComponent,
		HeaderComponent
	],
	exports: [ CoreComponent ],
	providers: [
		AuthGuard,
		NotAuthGuard,
		{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
	]
} )
export class CoreModule {
}

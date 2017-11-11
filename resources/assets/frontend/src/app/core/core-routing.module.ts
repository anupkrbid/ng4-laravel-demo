import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { NotAuthGuard } from './auth/not-auth.guard';

const routes: Routes = [
	{ path: '',  pathMatch: 'full', redirectTo: 'sign-in' },
	{ path: 'sign-in', canActivate: [ NotAuthGuard ], loadChildren: './auth/sign-in/sign-in.module#SignInModule' },
	{ path: 'sign-up', canActivate: [ NotAuthGuard ], loadChildren: './auth/sign-up/sign-up.module#SignUpModule' },
	{ path: '', canActivate: [ AuthGuard ], loadChildren: './layout/layout.module#LayoutModule' },
	{ path: '**', redirectTo: 'sign-in' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, enableTracing: false }) ],
  exports: [RouterModule]
})
export class CoreRoutingModule { }


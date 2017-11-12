import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/core.reducers';
import * as AlertActions from '../store/alert/alert.actions';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

	@Input('text') text:string="Danger Alert";
	@Input('type') type:string="danger";
	color: string;

	constructor(private store: Store<fromApp.AppState>) { }

	ngOnInit(){
		if (this.type === 'success') {
			this.color = "rgba(138,217,25,0.7)";
		} else if (this.type === 'warning') {
			this.color = "rgba(255,181,62,0.7)";
		} else {
			this.color = "rgba(249,36,63,0.7)"
		}
		setTimeout(() => {
			this.store.dispatch(new AlertActions.AlertHide());
		}, 3000)
	}

	dismiss(){
		this.store.dispatch(new AlertActions.AlertHide());
	}

}

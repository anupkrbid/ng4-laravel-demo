import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducers';
import * as AlertActions from '../store/alert/alert.actions';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

	@Input('text') text:string="Danger Alert";
	@Input('type') type:string="danger";
	color: string = "#ec045b";

	constructor(private store: Store<fromApp.AppState>) { }

	ngOnInit(){
		if(this.type === 'success') {
			this.color = "#8ad919";
		} else if (this.type === 'warning') {
			this.color = "#ffb53e";
		} else {
			this.color = "#f9243f"
		}
		setTimeout(() => {
			this.store.dispatch(new AlertActions.AlertHide());
		}, 3000)
	}

	dismiss(){
		this.store.dispatch(new AlertActions.AlertHide());
	}

}

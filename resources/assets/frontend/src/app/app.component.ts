import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from './store/app.reducers';
import * as fromAlert from './store/alert/alert.reducers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	alertState: Observable<fromAlert.AlertState>;

	constructor(private store: Store<fromApp.AppState>) {}

	ngOnInit() {
		this.alertState = this.store.select('alert');
	}

}

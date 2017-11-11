import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import * as fromAlert from './store/alert/alert.reducers';
import * as fromApp from './store/core.reducers';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

	alertState: Observable<fromAlert.AlertState>;

	constructor(private store: Store<fromApp.AppState>) {}

	ngOnInit() {
		this.alertState = this.store.select('alert');
	}

}

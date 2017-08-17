import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  onSave() {
    console.log('New Component Save Button Clicked');
  }

  onCancel() {
    console.log('New Component Cancel Button Clicked');
  }

}

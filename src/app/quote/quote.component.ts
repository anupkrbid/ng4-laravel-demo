import { Component, Input, OnInit } from '@angular/core';
import { QuoteModel } from "../quote.model";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  editMode = false;
  @Input() quote: QuoteModel;

  constructor() { }

  ngOnInit() { }

  onEdit() {
    this.editMode = true;
  }

  onCancel() {
    this.editMode = false;
  }

  onSave() {
    this.editMode = false;
  }

  onDelete() {
    console.log('Delete Button Pressed!');
  }

}

import { Component, Input, OnInit } from '@angular/core';

import { QuoteModel } from "../quote.model";
import { QuoteService } from "../quote.service";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  editMode = false;
  editedValue: string= '';

  @Input() quote: QuoteModel;

  constructor( private quoteService: QuoteService) { }

  ngOnInit() { }

  onEdit() {
    this.editMode = true;
  }

  onCancel() {
    this.editMode = false;
  }

  onSave() {
    const obj = {
      content: this.editedValue
    };
    this.quoteService.editQuote(this.quote.id, obj)
      .subscribe(
        (response: {success: boolean, message: string}) => {
          alert(response.message);
        },
        (error: Response ) => console.log(error),
        () => {
          this.editMode = false;
          this.editedValue = '';
        }
      );
  }

  onDelete() {
    console.log('Delete Button Pressed!');
  }

}

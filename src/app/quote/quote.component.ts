import { Component, Input, OnInit } from '@angular/core';

import { QuoteModel } from '../quote.model';
import { QuoteService } from '../quote.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  editMode = false;
  editedValue= '';

  @Input() quote: QuoteModel;

  constructor( private quoteService: QuoteService, private authService: AuthService ) { }

  ngOnInit() { }

  onEdit() {
    this.editMode = true;
  }

  onCancel() {
    this.editMode = false;
    this.editedValue = '';
  }

  onSave() {
    const obj = {
      content: this.editedValue
    };
    const token = this.authService.getToken();
    this.quoteService.editQuote(this.quote.id, obj, token)
      .subscribe(
        (response: {success: boolean, message: string}) => {
          alert(response.message);
        },
        (error: Response ) => console.log(error),
        () => {
          this.editMode = false;
          this.editedValue = '';
          this.quoteService.quotesNeedToUpdate.next();
        }
      );
  }

  onDelete() {
    const token = this.authService.getToken();
    this.quoteService.deleteQuote(this.quote.id, token)
      .subscribe(
        (response: {success: boolean, message: string}) => {
          alert(response.message);
        },
        (error: Response ) => console.log(error),
        () => {
           this.quoteService.quotesNeedToUpdate.next();
        }
      );
  }

}

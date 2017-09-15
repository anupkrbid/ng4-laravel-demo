import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { QuoteInterface } from '../quote.interface';
import { QuoteService } from '../quote.service';
import { QuoteModel } from '../quote.model';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: QuoteInterface[];

  constructor( private quoteService: QuoteService ) { }

  ngOnInit() {
    this.quoteService.quotesNeedToUpdate.subscribe(
      () => {
        this.quoteService.getQuotes()
          .subscribe(
            (response: {success: boolean, data: QuoteModel[]}) => {
              console.log('Data Fetched!');
              this.quotes = response.data;
            },
            (error: Response) => console.log(error),
          );
      }
    );
  }

  onFetchQuotes() {
    // this.quoteService.getQuotes()
    //   .subscribe(
    //     (response: {success: boolean, data: QuoteModel[]}) => {
    //       console.log('Data Fetched!');
    //       this.quotes = response.data;
    //       },
    //     (error: Response) => console.log(error),
    //   );
    this.quoteService.quotesNeedToUpdate.next();
  }

}

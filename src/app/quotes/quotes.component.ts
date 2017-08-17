import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";

import { QuoteInterface } from "../quote.interface";
import {QuoteService} from "../quote.service";
import { QuoteModel } from "../quote.model";
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: QuoteInterface[];

  constructor( private quoteService: QuoteService ) { }

  ngOnInit() { }

  onFetchQuotes() {
    this.quoteService.getQuotes()
      .subscribe(
        (response: QuoteModel[]) => {
          console.log(response);
          this.quotes = response;
          },
        (error: Response) => console.log(error),
      );
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Response } from "@angular/http";

import { QuoteService } from "../quote.service";

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {

  constructor( private quoteService: QuoteService) { }

  ngOnInit() { }

  onCancel(form: NgForm) {
    form.reset();
  }

  onSubmit(form: NgForm) {
    console.log(form);
    const obj = {
      content: form.value.content
    };
    this.quoteService.addQuote(obj)
      .subscribe(
        (response: {success: boolean, message: string}) => {
          alert(response.message);
        },
        (error: Response ) => console.log(error),
        () => form.reset()
      );
    // form.reset();
  }

}

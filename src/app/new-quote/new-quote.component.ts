import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';

import { QuoteService } from '../quote.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {

  constructor( private quoteService: QuoteService, private authService: AuthService ) { }

  ngOnInit() { }

  onCancel(form: NgForm) {
    form.reset();
  }

  onSubmit(form: NgForm) {
    const obj = {
      content: form.value.content
    };
    const token = this.authService.getToken();
    this.quoteService.addQuote(obj, token)
      .subscribe(
        (response: {success: boolean, message: string}) => {
          alert(response.message);
        },
        (error: Response ) => console.log(error),
        () => form.reset()
      );
  }

}

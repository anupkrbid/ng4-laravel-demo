import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

@Injectable()
export class QuoteService {

  quotesNeedToUpdate = new Subject();

  constructor( private http: Http) { }

  getQuotes(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/get-quotes')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  addQuote(data: {content: string}): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/add-quote', data)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  editQuote(id: number, data: {content: string}): Observable<any> {
    return this.http.put('http://127.0.0.1:8000/api/edit-quote/' + id, data)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  deleteQuote(id: number): Observable<any> {
    return this.http.delete('http://127.0.0.1:8000/api/delete-quote/' + id)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}

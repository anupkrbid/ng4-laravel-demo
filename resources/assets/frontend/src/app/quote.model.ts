/**
 * Modal to describe the structure of the Quote object
 */
export class QuoteModel {
  id: number;
  content: string;

  constructor( id: number, content: string ) {
    this.id = id;
    this.content = content;
  }
}

class Book {
  private title: string;
  private author: string;
  private year: Date;

  public constructor(title: string, author: string, year: Date | string) {
    this.title = title;
    this.author = author;
    this.year = new Date(year);
  }

  
}
let book = new Book("EBook", "SQL", "2025-10-12");
console.log(book);


import { Book } from "./book";
import { User } from "./user";


export class Library {
    private users: User[] = [];
    private books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
        console.log(`Book ${book.title} added in library`);
    }

    public addUser(user: User): void {
        this.users.push(user);
        console.log(`Book ${user.name} added in library`);
    }

    public getAllBook(): Book[] {
        return this.books;
    }
}

const library = new Library();

const book1 = new Book("Id1", "Man", "Minh");
library.addBook(book1);

console.log(library.getAllBook());
import {Book} from './Book';

class BookService
{
    constructor()
    {

    }

    printBook(book:Book): void
    {
        console.log(book.bookName);
        console.log(book.price);
        console.log(book.discount);
        console.log(book.bookNumber)
    }
}


let service=new BookService();
let headFirst: Book={bookName:"headFirst",bookNumber:101,price:450.0};
service.printBook(headFirst);

let angular: Book={bookName:"angular",bookNumber:102,price:200.50,discount:20};
service.printBook(angular);
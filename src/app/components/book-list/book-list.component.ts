import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/common/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  private books;
  bookTest: Book[] = [
    {
      sku: 'text-100',
      name: 'C Programming Language',
      description: 'Learn C Programming Language',
      unitPrice: 600.00,
      imageUrl: 'assets/images/books/text-100.png',
      active: true,
      unitsInStock: 100,
      createdOn: new Date(),
      updatedOn: null,
    },
    {
      sku: 'text-101',
      name: 'C# Crash Course',
      description: 'Learn C# Programming Language',
      unitPrice: 900.00,
      imageUrl: 'assets/images/books/text-101.png',
      active: true,
      unitsInStock: 100,
      createdOn: new Date(),
      updatedOn: null,
    },

    {
      sku: 'text-102',
      name: 'C++ Crash Course',
      description: 'Learn C++ Programming Language',
      unitPrice: 700.00,
      imageUrl: 'assets/images/books/text-102.png',
      active: true,
      unitsInStock: 100,
      createdOn: new Date(),
      updatedOn: null,
    }, {
      sku: 'text-103',
      name: 'Cracking The Coding Interview',
      description: 'Learn Cracking the coding interview',
      unitPrice: 1000.00,
      imageUrl: 'assets/images/books/text-103.png',
      active: true,
      unitsInStock: 100,
      createdOn: new Date(),
      updatedOn: null,
    },

    {
      sku: 'text-104',
      name: 'Data Structures And Algorithms',
      description: 'Learn data structures and algorithms',
      unitPrice: 1200.00,
      imageUrl: 'assets/images/books/text-104.png',
      active: true,
      unitsInStock: 100,
      createdOn: new Date(),
      updatedOn: null,
    },
    {
      sku: 'text-105',
      name: 'Head First Design Patterns',
      description: 'Learn design patterns from head first',
      unitPrice: 600.00,
      imageUrl: 'assets/images/books/text-105.png',
      active: true,
      unitsInStock: 100,
      createdOn: new Date(),
      updatedOn: null,
    },
    {
      sku: 'text-106',
      name: 'Java Programming',
      description: 'Learn java programming from scratch',
      unitPrice: 800.00,
      imageUrl: 'assets/images/books/text-106.png',
      active: true,
      unitsInStock: 100,
      createdOn: new Date(),
      updatedOn: null,
    },

    {
      sku: 'text-107',
      name: 'ML With Python',
      description: 'Learn machine learning with python',
      unitPrice: 1500.00,
      imageUrl: 'assets/images/books/text-107.png',
      active: true,
      unitsInStock: 100,
      createdOn: new Date(),
      updatedOn: null,
    },
    {
      sku: 'text-108',
      name: 'Practical API Design',
      description: 'Learn how to design API practically',
      unitPrice: 999.00,
      imageUrl: 'assets/images/books/text-108.png',
      active: true,
      unitsInStock: 100,
      createdOn: new Date(),
      updatedOn: null,
    },
    {
      sku: 'text-109',
      name: 'Python Programming',
      description: 'Learn python programming from scratch',
      unitPrice: 499.00,
      imageUrl: 'assets/images/books/text-109.png',
      active: true,
      unitsInStock: 100,
      createdOn: new Date(),
      updatedOn: null,
    }

  ];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.list_books();
  }


  list_books() {
    this.bookService.getBooks().subscribe(
      data => this.books = data
    );

  }

}

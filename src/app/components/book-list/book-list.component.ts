import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/common/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  currentCategoryId: number;

  constructor(private bookService: BookService, private activatedRoutes: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoutes.paramMap.subscribe(
      () => { this.list_books(); }
    );
  }


  list_books() {
    const hasCategoryId: boolean =
      this.activatedRoutes.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = +this.activatedRoutes.snapshot.paramMap.get('id');
    } else {
      this.currentCategoryId = 1;
    }
    this.bookService.getBooks(this.currentCategoryId).subscribe(
      data => this.books = data
    );

  }

}

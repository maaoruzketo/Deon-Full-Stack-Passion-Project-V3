import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manga-read',
  templateUrl: './manga-read.page.html',
  styleUrls: ['./manga-read.page.scss'],
})
export class MangaReadPage implements OnInit {
  //bookUrl = 'https://www.mangaeden.com/api/chapter/5bfbb4a5719a162c595796d8/';
  bookUrl = 'https://www.mangaeden.com/api/chapter/' + this.dService.getChapterId() + '/';
  bookObj: any = [];
  pageImage;
  pageNum = 0;
  firstTime = true;
  pageDetails;

  constructor(private dService: DataService, private http: HttpClient, private router: Router) {
    this.dService.getBookPages(this.bookUrl);
  }

  ngOnInit() {
    // this.getCData();
  }

  getCData() {
    this.pageDetails = this.dService.getChapterPages(this.dService.getChapterId());
  }

  onNext() {
    this.firstTimeCheck();
    if (this.pageNum >= this.bookObj.length - 1) {
      // reset to loop back
      this.pageNum = 0;
    } else {
      this.pageNum++;
    }

    this.pageImage = this.bookObj[this.pageNum];

  }

  onPrev() {
    this.firstTimeCheck();
    if (this.pageNum <= 0) {
      // reset to loop back
      this.pageNum = this.bookObj.length - 1;
    } else {
      this.pageNum--;
    }
    console.log(this.pageNum);
    this.pageImage = this.bookObj[this.pageNum];
  }

  firstTimeCheck() {
    if (this.firstTime) {
      this.bookObj = this.dService.getImagesInfo();
      console.log(this.bookObj);
      this.firstTime = false;
    }
  }

  goBack() {
    this.router.navigate(['/pages/book-info']);
  }
}

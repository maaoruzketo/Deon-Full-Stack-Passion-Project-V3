import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.page.html',
  styleUrls: ['./book-info.page.scss'],
})
export class BookInfoPage implements OnInit {

  bookDetails;
  chapterID;
  mangaId;
  mangaName;
  bookCover;
  chapters = [];
  categories = [];
  favoriteObject = {};
  mangaURL = 'https://www.mangaeden.com/api/manga/' + this.dService.getMangaId() + '/';


  constructor(private dService: DataService, private http: HttpClient, private router: Router) {
    this.dService.getChapterList(this.mangaURL);
   }



  ngOnInit() {
    this.mangaId = this.dService.mangaId;
    this.mangaName = this.dService.mangaName;
    this.bookCover = this.dService.bookCover;
    //this.bookDetails = null;
    setTimeout(()=>{
      this.getMData();
    }, 1000)
  }

  getMData() {
    //this.bookDetails = this.dService.getChapterList(this.dService.getMangaId());
    this.bookDetails = this.dService.getChapterList(this.mangaURL);
    console.log(this.bookDetails);



    // for (const c of this.bookDetails) {
    //   if (s.category.find(x => x === 'Shounen')) {
    //     this.chapters.push(s);
    //   }

    // test
    // for (const c of this.bookDetails) {
    //   if (c.category.find(x => x === 'Shounen')) {
    //     this.chapters.push(c);
    //   }
    // }
  }


  showInfo(chapter) {
    this.chapterID = chapter.chapterApiId;
    this.dService.setChapterId(chapter);
    //Save the chapter to your service
    // Route to the detail page
    this.router.navigate(['manga-read']);
    //alert('you clicked ' + chapter.name);
    console.log(chapter);
  }

  addToFavorites(){
    // for(var key in this.favoriteObject) {
    //   this.dService.mangaFavorites.push(this.favoriteObject[key]);
    // }
    this.favoriteObject = {
      "id": 0,
      "userName": this.dService.favoritesUserId,
      "mangaName": this.mangaName,
      "mangaId": this.mangaId,
      "bookCover": "https://cdn.mangaeden.com/mangasimg/" + this.bookCover
    };

    this.http.post(this.dService.addFavorites, this.favoriteObject).subscribe(x => {
      if(x = true)
      alert(`${this.mangaName} was added to favorites`)
    });
  }

}

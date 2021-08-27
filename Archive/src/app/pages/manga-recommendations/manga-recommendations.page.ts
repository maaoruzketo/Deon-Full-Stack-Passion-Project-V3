import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manga-recommendations',
  templateUrl: './manga-recommendations.page.html',
  styleUrls: ['./manga-recommendations.page.scss'],
})
export class MangaRecommendationsPage implements OnInit {
  mangaURLData;
  recommendations;
  mangaID;
  shounen = [];
  horror = [];
  comedy = [];
  adventure = [];
  ten = true;

  constructor(private dService: DataService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    // Grabs items in recommendations
    this.getData();
    this.mangaID = '';
    // console.log(this.mangaID)
    this.dService.setMangaId('');
    console.log(this.dService.setMangaId);
  }

  getData() {

    this.recommendations = this.dService.getLibraryInfo();
    console.log(this.recommendations);

    // We need to search through the recommendations array
    // We used a For Each to iterate through recommendations array
    for (const s of this.recommendations) {
      // Then we did a find, if a find doesn't find anything it returns undefined
      // and if statement with undefined doesn't run
      if (s.category.find(x => x === 'Shounen')) {
        // Once we know it is the category we are looking for, we are then going to push the entire object for reference.
        for (let i = 0; i < 11; i++) {
          this.ten = false;
        }
        this.shounen.push(s);
      }

      if (s.category.find(x => x === 'Horror')) {
        this.horror.push(s);
      }

      if (s.category.find(x => x === 'Comedy')) {
        this.comedy.push(s)
      }

      if (s.category.find(x => x === 'Adventure')) {
        this.adventure.push(s)
      }

    }
    console.log(this.shounen);
  }
  showInfo(manga) {
    this.mangaID = manga.id;
    this.dService.mangaId = manga.id;
    this.dService.mangaName = manga.name;
    this.dService.bookCover = manga.bookCover;
    this.dService.setMangaId(this.mangaID);
    this.dService.setChapterListArray(this.dService.getChapterList(this.mangaID));
    //Save the manga to your service
    // Route to the detail page
    this.router.navigate(['/pages/book-info']);
    //alert('you clicked ' + manga.name);
    console.log(manga);
  }

}
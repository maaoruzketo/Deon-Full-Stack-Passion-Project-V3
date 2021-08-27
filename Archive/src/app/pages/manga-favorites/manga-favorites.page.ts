import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manga-favorites',
  templateUrl: './manga-favorites.page.html',
  styleUrls: ['./manga-favorites.page.scss'],
})
export class MangaFavoritesPage implements OnInit {
  favoriteManga;
  emptyVar; 

  public getFavoritesURL = this.dService.apiURL + `mangaFavorites/${this.dService.favoritesUserId}`;
  

  constructor(private dService: DataService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getFavorites();
    //this.emptyVar = this.getFavorites();
  }

  getFavorites(){
    const mangaInfo = "bearer" + this.dService.token;

    this.dService.httpOptions.headers = this.dService.httpOptions.headers.set("Authorization", "bearer" + this.dService.token);
    this.http.get(this.getFavoritesURL, this.dService.httpOptions).subscribe(data =>{
      this.favoriteManga = data;
      console.log(this.favoriteManga);
    });
  }

  removeFromFavorites(deleted){
    let deleteFavoritesURL = this.dService.apiURL + `mangaFavorites/ ${this.favoriteManga[deleted].id}`;
    this.http.delete(deleteFavoritesURL, this.favoriteManga[deleted].id).subscribe(help => {console.log(help)
    });
    console.log(this.favoriteManga[deleted].id);
    setTimeout(()=>{
      this.getFavorites();
    }, 1000)
  }

  showInfo(biblio) {
    this.dService.setMangaId(this.favoriteManga[biblio].mangaId);
    this.dService.setChapterListArray(this.dService.getChapterList(this.favoriteManga[biblio].mangaId));
    //Save the manga to your service
    // Route to the detail page
    this.router.navigate(['/pages/book-info']);
    //alert('you clicked ' + manga.name);
    console.log(this.favoriteManga.mangaId);
  }
  

}

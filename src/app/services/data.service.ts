import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MangaDetails } from '../interfaces/manga-details';
import { MangaLibrary } from '../interfaces/manga-library';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';
import { Favorites } from '../interfaces/favorites';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //login piece
  public apiURL = environment.api;
  public loginURL = this.apiURL + 'auth/login';
  public getMangaURL = this.apiURL + 'mangaFavorites';
  public token;
  public bookChapterList;
  public mangaName;
  public mangaId;
  public bookCover;
  count = 0;

  //sign up piece
  public addUser = this.apiURL + 'UserInfo/add';

  //add favorites piece
  public addFavorites = this.apiURL + 'mangaFavorites/add';

  // By setting up httpOptions here we don't have to inline it
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  //chapter piece
  pagesInBook;
  imagesObj = [];

  public favoritesAdd;

  public favoritesUserId: User = { UserName: '', Password: '' }
  public getFavoritesURL = this.apiURL + `favorites/${this.favoritesUserId}`;

  //Manga api calls
  mangaInfoId;
  mangaChapterId;
  mangaInfoFull;
  currentMangaId;
  currentChapterId;
  //Api Database of manga 
  mangaURL = 'https://www.mangaeden.com/api/list/0';

  //APi call of a book's info...need to impliment the variable
  //mangaInfoURL = 'https://www.mangaeden.com/api/manga/' + this.mangaInfoId;
  mangaInfoURL = 'https://www.mangaeden.com/api/manga/4e70ea10c092255ef7004aa2';

  //Api call of a chapter's pages
  //mangaChapterURL = 'https://www.mangaeden.com/api/chapter/';
  mangaChapterURL = 'https://www.mangaeden.com/api/chapter/5ea2b8b4719a16656f960fce';
  mangaCDN = 'https://cdn.mangaeden.com/mangasimg/';


  mangaFavorites;
  mangaDownloads = [];

  mLibraryInfo: MangaLibrary[] = [];
  mDetailsInfo: any[] = [];
  mChapterInfo: any[] = []

  mInfoURL(MID) {
    this.mangaInfoFull = this.mangaInfoURL + MID;
    //Notes for JT. I'm trying to figure out how to properly interpolate the id from the mangaURL into this link, so I may obtain the data for the selected book
    //this.mangaInfoFull = this.mangaInfoURL + this.mLibraryInfo.i;
    // this.mangaInfoFull = this.mangaInfoURL + m.i;
  }


  constructor(private http: HttpClient, private router: Router) {
    this.getData();
  }

  getLibraryInfo() {
    return this.mLibraryInfo;
  }

  getMangaInfo() {
    return this.mDetailsInfo;
  }

  resetMangaId(){
    this.currentMangaId = null;
  }

  setMangaId(id) {
    this.currentMangaId = id;
    console.log('setting value: ' + this.currentMangaId);
  }
  getMangaId() {
    console.log('getting value: ' + this.currentMangaId);
    return this.currentMangaId;

  }
  setChapterListArray(chapters) {
    this.bookChapterList = chapters;
  };

  getChapterListArray() {
    return this.bookChapterList;
  }

  setChapterId(id) {
    this.currentChapterId = id;
    console.log('setting value: ' + this.currentChapterId);
  }
  getChapterId() {
    console.log('getting value: ' + this.currentChapterId);
    return this.currentChapterId;

  }

  getURL(URL: string): Observable<any> {
    return this.http.get(URL);
  }

  getData() {

    this.getURL(this.mangaURL).subscribe(
      x => {
        for (let m of x.manga) {
          const mInfo: MangaLibrary = {
            name: m.t,
            category: m.c,
            hits: m.h,
            id: m.i,
            bookCover: m.im,
            lastUpdate: m.ld,
            status: m.s
          };
          this.mLibraryInfo.push(mInfo);
        }
        console.log(this.mLibraryInfo);
      }
    );

  }
  getChapterList(manga_ID) {

    //manga_ID = '4e70ea10c092255ef7004aa2';
    //let manga_ID_URL = 'https://www.mangaeden.com/api/manga/' + manga_ID;
    // https://www.mangaeden.com/api/manga/[manga.id]/
    // This is getting the chapterList of Books
    this.getURL(manga_ID).subscribe(
      x => {
        let halt = x.chapters.length;
        console.log(x.chapters.length);
        console.log(x);
        //Notes for JT. The x.manga is a placeholder. The link below shows that most all of the data I'm needing is on the same first level hence I don't know what to put
        //https://www.mangaeden.com/api/manga/5bb935dd719a1675aba1a0b4/
        //First you save everything from x
        //author Info will be series information
        let authorInfo = {
          name: x.title,
          category: x.categories,
          hits: x.hits,
          bookCover: x.image,
          lastUpdate: x.last_chapter_date,
          status: x.status,
          author: x.author,
          desc: x.description,
        };
        this.mDetailsInfo.push(authorInfo);
        
        // collect an array of all the chapters
        for (let d of x.chapters) {
          this.count++;
          console.log(d)
          if(this.count = halt){
            let mDetails: any = {
              chapterNumber: d[0],
              chapterApiId: d[3]
            };
            console.log('go die')
            this.mDetailsInfo.push(mDetails);
          }
        }
      }
    );
    return this.mDetailsInfo;
  }

  getChapterPages(chapter_ID) {
    const chapter_ID_URL = 'https://www.mangaeden.com/api/chapter/' + chapter_ID;
    this.getURL(chapter_ID_URL).subscribe(
      x => {
        console.log(x);

        const chapterInfo = {
          pages: x.images
        };
        this.mChapterInfo.push(chapterInfo);

        //The array of all the pages...needs to be cycled through. Try the same approach as the student directory
        for (let p of x.images) {
          const chapterPage: any = {
            pageNumber: p[0],
            pageId: p[1],
            pageWidth: p[2],
            pageLength: p[3]
          };
          console.log(chapterPage);
          this.mChapterInfo.push(chapterPage);
        }
      }
    );
    return this.mChapterInfo;
  }

  //Login Function to recieve username and password object
  Login(credentials: any) {
    this.favoritesUserId = credentials.UserName;
    console.log(this.favoritesUserId)
    // Post Request
    // this.http.post( url to post to , information to be passed)
    this.http.post(this.loginURL, credentials).subscribe(data => {
      this.token = data;
      // Grabbing the value inside of the object
      this.token = this.token.token;
      localStorage.setItem('token', JSON.stringify(this.token));
      console.log(this.token);
      // This was moved from the loginpage.ts
      alert(`Welcome ${this.favoritesUserId}`)
      this.router.navigate(['pages/manga-recommendations']);
    });
  }


  public isLoggedIn = false;

  //Setting our boolean isLoggedIn
  setLogin(loginValue) {
    this.isLoggedIn = loginValue;
  }

  //Getting our boolean isLoggedIn
  getLogin() {
    return this.isLoggedIn;
  }

  AddUser(information: any) {
    //const tokenInfo = 'bearer ' + this.token;
    //console.log(this.token);
    // We use the set here to create an instance of httpOptions with the value we need for the header.
    //this.httpOptions.headers = this.httpOptions.headers.set('Authorization', 'bearer ' + this.token);
    console.log(information);
    this.http.post(this.addUser, information).subscribe(data => {
      console.log(data);
      this.token = data;
      this.token = this.token.token;
    });
  }

  AddFavorites(books: any) {
    console.log(books);
    this.http.post(this.addFavorites, books).subscribe()
  }

  getBookPages(url) {
    this.http.get(url).subscribe(x => {
      this.pagesInBook = x;
      this.pagesInBook = this.pagesInBook.images;
      this.getImagesForBook();

    });

  }
  getImagesForBook() {
    console.log(this.pagesInBook);
    this.imagesObj = [];
    for (const page of this.pagesInBook) {
      console.log(page[0]);
      this.imagesObj.push('https://cdn.mangaeden.com/mangasimg/' + page[1]);
      // push in image link
      //  https://cdn.mangaeden.com/mangasimg/8c/8cdd1467d9d0cd8ad36fdb132f78160238c84e61476e2c14d4de17a3.jpg
    }
    console.log(this.imagesObj);

  }

  getImagesInfo() {
    console.log('returning');
    console.log(this.imagesObj);
    return this.imagesObj;
  }

  // this.favoritesAdd = ;

  // this.http.post(this.addFavoritesURL, ).subscribe(data =>
  //   {
  //     console.log(data)
  //   });

  // const mFavs: Favorites = {
  //   id: 0,
  //   userName: ,
  //   mangaName: Title,
  //   mangaId: string,
  //   bookCover: image
  // };


}

import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DataService } from './services/data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedManga = 0;
  public selectedComic = 0;
  public mangaPages = [
    {
      title: 'Recommendations',
      url: '/pages/manga-recommendations',
      icon: 'flame'
    },
    {
      title: 'Newest Chapters',
      url: '/pages/manga-chapters',
      icon: 'thunderstorm'
    },
    {
      title: 'Favorites',
      url: '/pages/manga-favorites',
      icon: 'heart'
    },
    {
      title: 'Downloaded',
      url: '/pages/manga-download',
      icon: 'moon'
    }
  ];
  public comicPages = [
    {
      title: 'Recommendations',
      url: '/pages/comic-recommendations',
      icon: 'flame'
    },
    {
      title: 'Newest Chapters',
      url: '/pages/comic-chapters',
      icon: 'thunderstorm'
    },
    {
      title: 'Favorites',
      url: '/pages/comic-favorites',
      icon: 'heart'
    },
    {
      title: 'Downloaded',
      url: '/pages/comic-download',
      icon: 'moon'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private dService: DataService,
    private http: HttpClient,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('pages/')[1];
    if (path !== undefined) {
      this.selectedManga = this.mangaPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
      this.selectedComic = this.comicPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  unCheck(){
    const path = window.location.pathname.split('pages/')[1];
    if (path == 'manga-recommendations' || path == 'manga-chapters' || path == 'manga-favorites' || path == 'manga-download'){
      this.selectedComic = null;
    } else if (path == 'comic-recommendations' || path == 'comic-chapters' || path == 'comic-favorites' || path == 'comic-download'){
      this.selectedManga = null;
    }
  }

  signOut(){
    localStorage.removeItem('jwt');
    this.router.navigate(['pages/manga-home']);
  }
}

import { AuthGuardService } from './services/guard/auth-guard.service';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/manga-home',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: 'pages/manga-home',
    loadChildren: () => import('./pages/manga-home/manga-home.module').then( m => m.MangaHomePageModule)
  },
  {
    path: 'pages/manga-chapters',
    loadChildren: () => import('./pages/manga-chapters/manga-chapters.module').then( m => m.MangaChaptersPageModule)
  },
  {
    path: 'pages/manga-favorites',
    loadChildren: () => import('./pages/manga-favorites/manga-favorites.module').then( m => m.MangaFavoritesPageModule),
    //fix later
    // canActivate:[AuthGuardService]
  },
  {
    path: 'pages/manga-download',
    loadChildren: () => import('./pages/manga-download/manga-download.module').then( m => m.MangaDownloadPageModule)
  },
  {
    path: 'pages/manga-recommendations',
    loadChildren: () => import('./pages/manga-recommendations/manga-recommendations.module').then( m => m.MangaRecommendationsPageModule)
  },
  {
    path: 'pages/comic-recommendations',
    loadChildren: () => import('./pages/comic-recommendations/comic-recommendations.module').then( m => m.ComicRecommendationsPageModule)
  },
  {
    path: 'pages/comic-chapters',
    loadChildren: () => import('./pages/comic-chapters/comic-chapters.module').then( m => m.ComicChaptersPageModule)
  },
  {
    path: 'pages/comic-download',
    loadChildren: () => import('./pages/comic-download/comic-download.module').then( m => m.ComicDownloadPageModule)
  },
  {
    path: 'pages/comic-favorites',
    loadChildren: () => import('./pages/comic-favorites/comic-favorites.module').then( m => m.ComicFavoritesPageModule)
  },
  {
    path: 'pages/comic-search',
    loadChildren: () => import('./pages/comic-search/comic-search.module').then( m => m.ComicSearchPageModule)
  },
  {
    path: 'pages/manga-search',
    loadChildren: () => import('./pages/manga-search/manga-search.module').then( m => m.MangaSearchPageModule)
  },
  {
    path: 'pages/book-info',
    loadChildren: () => import('./pages/book-info/book-info.module').then( m => m.BookInfoPageModule)
  },
  {
    path: 'manga-read',
    loadChildren: () => import('./pages/manga-read/manga-read.module').then( m => m.MangaReadPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  // {path: '', component: },
  // {path: 'protected', component: ProtectedComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

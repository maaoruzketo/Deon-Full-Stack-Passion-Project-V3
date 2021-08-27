import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MangaFavoritesPage } from './manga-favorites.page';

describe('MangaFavoritesPage', () => {
  let component: MangaFavoritesPage;
  let fixture: ComponentFixture<MangaFavoritesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangaFavoritesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MangaFavoritesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

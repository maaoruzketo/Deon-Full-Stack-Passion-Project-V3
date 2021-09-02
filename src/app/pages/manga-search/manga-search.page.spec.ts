import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MangaSearchPage } from './manga-search.page';

describe('MangaSearchPage', () => {
  let component: MangaSearchPage;
  let fixture: ComponentFixture<MangaSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangaSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MangaSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

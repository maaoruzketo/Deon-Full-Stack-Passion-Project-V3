import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MangaHomePage } from './manga-home.page';

describe('MangaHomePage', () => {
  let component: MangaHomePage;
  let fixture: ComponentFixture<MangaHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangaHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MangaHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

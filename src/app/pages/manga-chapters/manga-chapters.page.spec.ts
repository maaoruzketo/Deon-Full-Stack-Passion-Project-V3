import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MangaChaptersPage } from './manga-chapters.page';

describe('MangaChaptersPage', () => {
  let component: MangaChaptersPage;
  let fixture: ComponentFixture<MangaChaptersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangaChaptersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MangaChaptersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

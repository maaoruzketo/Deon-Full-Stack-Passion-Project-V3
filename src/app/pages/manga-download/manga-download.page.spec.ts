import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MangaDownloadPage } from './manga-download.page';

describe('MangaDownloadPage', () => {
  let component: MangaDownloadPage;
  let fixture: ComponentFixture<MangaDownloadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangaDownloadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MangaDownloadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

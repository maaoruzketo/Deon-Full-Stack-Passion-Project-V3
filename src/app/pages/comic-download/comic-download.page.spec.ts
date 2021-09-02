import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComicDownloadPage } from './comic-download.page';

describe('ComicDownloadPage', () => {
  let component: ComicDownloadPage;
  let fixture: ComponentFixture<ComicDownloadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicDownloadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComicDownloadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

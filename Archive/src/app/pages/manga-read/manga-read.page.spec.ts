import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MangaReadPage } from './manga-read.page';

describe('MangaReadPage', () => {
  let component: MangaReadPage;
  let fixture: ComponentFixture<MangaReadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangaReadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MangaReadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComicChaptersPage } from './comic-chapters.page';

describe('ComicChaptersPage', () => {
  let component: ComicChaptersPage;
  let fixture: ComponentFixture<ComicChaptersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicChaptersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComicChaptersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

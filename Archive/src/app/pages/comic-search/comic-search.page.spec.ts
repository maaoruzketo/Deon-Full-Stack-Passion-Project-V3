import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComicSearchPage } from './comic-search.page';

describe('ComicSearchPage', () => {
  let component: ComicSearchPage;
  let fixture: ComponentFixture<ComicSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComicSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

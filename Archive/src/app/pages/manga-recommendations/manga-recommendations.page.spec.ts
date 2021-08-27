import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MangaRecommendationsPage } from './manga-recommendations.page';

describe('MangaRecommendationsPage', () => {
  let component: MangaRecommendationsPage;
  let fixture: ComponentFixture<MangaRecommendationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangaRecommendationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MangaRecommendationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

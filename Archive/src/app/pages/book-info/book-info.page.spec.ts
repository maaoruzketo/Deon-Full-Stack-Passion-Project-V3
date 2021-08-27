import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookInfoPage } from './book-info.page';

describe('BookInfoPage', () => {
  let component: BookInfoPage;
  let fixture: ComponentFixture<BookInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

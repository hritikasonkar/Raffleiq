import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyrafflePage } from './myraffle.page';

describe('MyrafflePage', () => {
  let component: MyrafflePage;
  let fixture: ComponentFixture<MyrafflePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyrafflePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyrafflePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

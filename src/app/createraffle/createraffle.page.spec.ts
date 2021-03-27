import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreaterafflePage } from './createraffle.page';

describe('CreaterafflePage', () => {
  let component: CreaterafflePage;
  let fixture: ComponentFixture<CreaterafflePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaterafflePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreaterafflePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

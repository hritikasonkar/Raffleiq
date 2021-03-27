import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserrafflelistPage } from './userrafflelist.page';

describe('UserrafflelistPage', () => {
  let component: UserrafflelistPage;
  let fixture: ComponentFixture<UserrafflelistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserrafflelistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserrafflelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

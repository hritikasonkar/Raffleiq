import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserTransactionPage } from './user-transaction.page';

describe('UserTransactionPage', () => {
  let component: UserTransactionPage;
  let fixture: ComponentFixture<UserTransactionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTransactionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

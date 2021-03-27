import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusinessDashboardPage } from './business-dashboard.page';

describe('BusinessDashboardPage', () => {
  let component: BusinessDashboardPage;
  let fixture: ComponentFixture<BusinessDashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessDashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

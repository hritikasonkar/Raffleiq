import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnterotpPage } from './enterotp.page';

describe('EnterotpPage', () => {
  let component: EnterotpPage;
  let fixture: ComponentFixture<EnterotpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterotpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnterotpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

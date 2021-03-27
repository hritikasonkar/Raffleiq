import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewParticipantPage } from './view-participant.page';

describe('ViewParticipantPage', () => {
  let component: ViewParticipantPage;
  let fixture: ComponentFixture<ViewParticipantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewParticipantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewParticipantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

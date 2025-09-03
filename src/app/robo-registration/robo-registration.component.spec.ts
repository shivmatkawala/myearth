import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboRegistrationComponent } from './robo-registration.component';

describe('RoboRegistrationComponent', () => {
  let component: RoboRegistrationComponent;
  let fixture: ComponentFixture<RoboRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoboRegistrationComponent]
    });
    fixture = TestBed.createComponent(RoboRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

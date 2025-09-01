import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirecrackerComponent } from './firecracker.component';

describe('FirecrackerComponent', () => {
  let component: FirecrackerComponent;
  let fixture: ComponentFixture<FirecrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirecrackerComponent]
    });
    fixture = TestBed.createComponent(FirecrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

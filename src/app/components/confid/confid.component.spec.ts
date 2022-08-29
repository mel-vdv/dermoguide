import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidComponent } from './confid.component';

describe('ConfidComponent', () => {
  let component: ConfidComponent;
  let fixture: ComponentFixture<ConfidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

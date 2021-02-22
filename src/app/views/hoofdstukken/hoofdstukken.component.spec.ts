import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoofdstukkenComponent } from './hoofdstukken.component';

describe('HoofdstukkenComponent', () => {
  let component: HoofdstukkenComponent;
  let fixture: ComponentFixture<HoofdstukkenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoofdstukkenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoofdstukkenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

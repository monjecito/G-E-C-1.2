import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DedicateComponent } from './dedicate.component';

describe('DedicateComponent', () => {
  let component: DedicateComponent;
  let fixture: ComponentFixture<DedicateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DedicateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DedicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

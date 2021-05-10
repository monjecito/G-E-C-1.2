import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelemedidaLedsComponent } from './telemedida-leds.component';

describe('TelemedidaLedsComponent', () => {
  let component: TelemedidaLedsComponent;
  let fixture: ComponentFixture<TelemedidaLedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelemedidaLedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelemedidaLedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

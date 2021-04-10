import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EficienciaComponent } from './eficiencia.component';

describe('EficienciaComponent', () => {
  let component: EficienciaComponent;
  let fixture: ComponentFixture<EficienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EficienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EficienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

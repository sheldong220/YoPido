import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasPlatoComponent } from './caracteristicas-plato.component';

describe('CaracteristicasPlatoComponent', () => {
  let component: CaracteristicasPlatoComponent;
  let fixture: ComponentFixture<CaracteristicasPlatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaracteristicasPlatoComponent]
    });
    fixture = TestBed.createComponent(CaracteristicasPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

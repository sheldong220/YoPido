import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPlatoComponent } from './modificar-plato.component';

describe('ModificarPlatoComponent', () => {
  let component: ModificarPlatoComponent;
  let fixture: ComponentFixture<ModificarPlatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarPlatoComponent]
    });
    fixture = TestBed.createComponent(ModificarPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatoHijoComponent } from './plato-hijo.component';

describe('PlatoHijoComponent', () => {
  let component: PlatoHijoComponent;
  let fixture: ComponentFixture<PlatoHijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatoHijoComponent]
    });
    fixture = TestBed.createComponent(PlatoHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

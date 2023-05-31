import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPruebasComponent } from './listar-pruebas.component';

describe('ListarPruebasComponent', () => {
  let component: ListarPruebasComponent;
  let fixture: ComponentFixture<ListarPruebasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPruebasComponent]
    });
    fixture = TestBed.createComponent(ListarPruebasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

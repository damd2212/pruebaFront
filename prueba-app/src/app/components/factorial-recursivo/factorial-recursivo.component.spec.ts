import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorialRecursivoComponent } from './factorial-recursivo.component';

describe('FactorialRecursivoComponent', () => {
  let component: FactorialRecursivoComponent;
  let fixture: ComponentFixture<FactorialRecursivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactorialRecursivoComponent]
    });
    fixture = TestBed.createComponent(FactorialRecursivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

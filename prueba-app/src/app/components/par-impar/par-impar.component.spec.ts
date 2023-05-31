import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParImparComponent } from './par-impar.component';

describe('ParImparComponent', () => {
  let component: ParImparComponent;
  let fixture: ComponentFixture<ParImparComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParImparComponent]
    });
    fixture = TestBed.createComponent(ParImparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

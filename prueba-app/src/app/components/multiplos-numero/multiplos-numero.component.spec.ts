import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplosNumeroComponent } from './multiplos-numero.component';

describe('MultiplosNumeroComponent', () => {
  let component: MultiplosNumeroComponent;
  let fixture: ComponentFixture<MultiplosNumeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiplosNumeroComponent]
    });
    fixture = TestBed.createComponent(MultiplosNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

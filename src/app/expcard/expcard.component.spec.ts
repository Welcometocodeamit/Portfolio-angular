import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpcardComponent } from './expcard.component';

describe('ExpcardComponent', () => {
  let component: ExpcardComponent;
  let fixture: ComponentFixture<ExpcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpcardComponent]
    });
    fixture = TestBed.createComponent(ExpcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

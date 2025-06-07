import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRectangularBigComponent } from './button-rectangular-big.component';

describe('ButtonRectangularBigComponent', () => {
  let component: ButtonRectangularBigComponent;
  let fixture: ComponentFixture<ButtonRectangularBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonRectangularBigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonRectangularBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

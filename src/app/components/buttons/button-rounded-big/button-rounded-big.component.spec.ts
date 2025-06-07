import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRoundedBigComponent } from './button-rounded-big.component';

describe('ButtonRoundedBigComponent', () => {
  let component: ButtonRoundedBigComponent;
  let fixture: ComponentFixture<ButtonRoundedBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonRoundedBigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonRoundedBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

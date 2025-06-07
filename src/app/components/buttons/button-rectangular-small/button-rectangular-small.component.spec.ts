import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRectangularSmallComponent } from './button-rectangular-small.component';

describe('ButtonRectangularSmallComponent', () => {
  let component: ButtonRectangularSmallComponent;
  let fixture: ComponentFixture<ButtonRectangularSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonRectangularSmallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonRectangularSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

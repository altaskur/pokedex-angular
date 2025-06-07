import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRoundedSmallComponent } from './button-rounded-small.component';

describe('ButtonRoundedSmallComponent', () => {
  let component: ButtonRoundedSmallComponent;
  let fixture: ComponentFixture<ButtonRoundedSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonRoundedSmallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonRoundedSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

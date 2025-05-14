import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigthsComponent } from './ligths.component';

describe('LigthsComponent', () => {
  let component: LigthsComponent;
  let fixture: ComponentFixture<LigthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LigthsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LigthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

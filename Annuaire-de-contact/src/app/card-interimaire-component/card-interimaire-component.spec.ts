import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInterimaireComponent } from './card-interimaire-component';

describe('CardInterimaireComponent', () => {
  let component: CardInterimaireComponent;
  let fixture: ComponentFixture<CardInterimaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardInterimaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardInterimaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

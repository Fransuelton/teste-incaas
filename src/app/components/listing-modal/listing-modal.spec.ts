import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingModal } from './listing-modal';

describe('ListingModal', () => {
  let component: ListingModal;
  let fixture: ComponentFixture<ListingModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingModal],
    }).compileComponents();

    fixture = TestBed.createComponent(ListingModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

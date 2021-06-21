import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedItemsComponent } from './suggested-items.component';

describe('SuggestedItemsComponent', () => {
  let component: SuggestedItemsComponent;
  let fixture: ComponentFixture<SuggestedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestedItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

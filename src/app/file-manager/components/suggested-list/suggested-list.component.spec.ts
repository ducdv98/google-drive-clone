import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedListComponent } from './suggested-list.component';

describe('SuggestedItemsComponent', () => {
  let component: SuggestedListComponent;
  let fixture: ComponentFixture<SuggestedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

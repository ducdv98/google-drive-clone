import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropPlaceholderComponent } from './drop-placeholder.component';

describe('DropPlaceholderComponent', () => {
  let component: DropPlaceholderComponent;
  let fixture: ComponentFixture<DropPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

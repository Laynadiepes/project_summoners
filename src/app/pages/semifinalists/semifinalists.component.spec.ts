import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemifinalistsComponent } from './semifinalists.component';

describe('SemifinalistsComponent', () => {
  let component: SemifinalistsComponent;
  let fixture: ComponentFixture<SemifinalistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SemifinalistsComponent]
    });
    fixture = TestBed.createComponent(SemifinalistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebankComponent } from './updatebank.component';

describe('UpdatebankComponent', () => {
  let component: UpdatebankComponent;
  let fixture: ComponentFixture<UpdatebankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatebankComponent]
    });
    fixture = TestBed.createComponent(UpdatebankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

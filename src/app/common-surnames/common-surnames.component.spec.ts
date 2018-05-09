import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSurnamesComponent } from './common-surnames.component';

describe('CommonSurnamesComponent', () => {
  let component: CommonSurnamesComponent;
  let fixture: ComponentFixture<CommonSurnamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonSurnamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSurnamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

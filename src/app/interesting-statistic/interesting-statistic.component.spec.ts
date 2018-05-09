import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestingStatisticComponent } from './interesting-statistic.component';

describe('InterestingStatisticComponent', () => {
  let component: InterestingStatisticComponent;
  let fixture: ComponentFixture<InterestingStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestingStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestingStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

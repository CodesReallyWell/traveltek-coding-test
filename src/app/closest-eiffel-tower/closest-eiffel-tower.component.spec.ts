import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosestEiffelTowerComponent } from './closest-eiffel-tower.component';

describe('ClosestEiffelTowerComponent', () => {
  let component: ClosestEiffelTowerComponent;
  let fixture: ComponentFixture<ClosestEiffelTowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosestEiffelTowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosestEiffelTowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

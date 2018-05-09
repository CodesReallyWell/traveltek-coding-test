import { Component, OnChanges, OnInit, Input } from '@angular/core';
import { Person } from '../model/people';
import {from, of} from 'rxjs';
import { pluck, reduce, map } from 'rxjs/operators';


@Component({
  selector: 'app-interesting-statistic',
  templateUrl: './interesting-statistic.component.html',
  styleUrls: ['./interesting-statistic.component.css']
})
export class InterestingStatisticComponent implements OnChanges, OnInit {
  @Input()
  people: Person[];
  averageBalance: number;
  numberOfPeople: number;
  constructor() { }

  ngOnInit() {
    this.calculateAverageBalance();
  }

  ngOnChanges() {
    this.calculateAverageBalance();
  }


  private calculateAverageBalance() {
    if (this.people && this.people.length > 0) {
      this.numberOfPeople = this.people.length;
      from(this.people)
        .pipe(
          pluck ('balance'),
          map(balance => (balance + '').replace(',', '')),
          map(parseFloat),
          reduce((sum, balance) =>  sum + balance, 0),
        )
        .subscribe((sumOfBalances) => this.averageBalance = Math.round(sumOfBalances * 100 / this.numberOfPeople) / 100);
    }
  }


}

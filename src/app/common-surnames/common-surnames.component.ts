import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Person } from '../model/people';
import { map, pluck, reduce } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-common-surnames',
  templateUrl: './common-surnames.component.html',
  styleUrls: ['./common-surnames.component.css']
})
export class CommonSurnamesComponent implements OnChanges, OnInit {

  @Input()
  people: Person[];
  top10Surnames = [];
  constructor() { }

  ngOnInit() {
    this.mostCommonSurnames();
  }

  ngOnChanges() {
    this.mostCommonSurnames();
  }

  private mostCommonSurnames() {
    if (this.people && this.people.length > 0) {
      from(this.people)
        .pipe(
          pluck('name', 'last'),
          reduce((surnameCounts, surname: string) => {
            if (!surnameCounts[surname]) {
                surnameCounts[surname] = 1;
            } else {
                surnameCounts[surname]++;
            }

            return surnameCounts;
          }, {}),
          map((surnameCounts) => {
            const surnameCountArray = [];
            for (const surname in surnameCounts) {
              if (surnameCounts.hasOwnProperty(surname)) {
                surnameCountArray.push({
                  surname: surname,
                  count:   surnameCounts[surname]
                });
              }
            }

            return surnameCountArray;
          })
        ).subscribe((surnameCounts) => {
        const sortedSurnameCounts = surnameCounts.sort((surnameCount1, surnameCount2) => {
          return surnameCount2.count - surnameCount1.count;
        });
        this.top10Surnames = sortedSurnameCounts.slice(0, 10);
      });
    }
  }
}

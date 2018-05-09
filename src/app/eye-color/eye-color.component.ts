import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Person } from '../model/people';
import { of } from 'rxjs';
import { count, map, filter, reduce } from 'rxjs/operators';




@Component({
  selector: 'app-eye-color',
  templateUrl: './eye-color.component.html',
  styleUrls: ['./eye-color.component.css']
})
export class EyeColorComponent implements OnChanges, OnInit {
  @Input()
  people: Person[];
  numberGreenEyes: number;
  averageAgeBlueEyes: number;
  constructor() { }

  ngOnInit() {
    this.countGreenEyes();
    this.calculateAverageAgeOfBlueEyes();
  }

  ngOnChanges() {
    this.countGreenEyes();
    this.calculateAverageAgeOfBlueEyes();
  }

  private countGreenEyes() {
    if (this.people && this.people.length > 0) {
      of(...this.people) // creates items in stream each item is a person containing their data
        .pipe(
          map((person: Person) => person.eyeColor), // gets eye color from person and pass it to next pipe
          count(eyeColor => eyeColor === 'green') // return the number of eye colors that are only green this is a reduction
        )
        .subscribe(numberGreenEyes => this.numberGreenEyes = numberGreenEyes); // end of the pipe
    } else {
       this.numberGreenEyes = 0;
    }
  }

  private calculateAverageAgeOfBlueEyes(){
    if (this.people && this.people.length > 0) {
      const blueEyeAges = of(...this.people) // blue eyes is a stream of ages of people with blue eyes
        .pipe(
          filter((person: Person) => person.eyeColor === 'blue'),
          map((person: Person) => person.age)
        );

        blueEyeAges
          .pipe(count()) // count number of things in the pipe
          .subscribe(numberBlueEyes =>
            blueEyeAges.pipe(
              reduce((sum, blueEyeAge) => sum + blueEyeAge, 0) // start at 0 call that function for every blue eye age
            )
              .subscribe(sumOfBlueEyeAges => {
                this.averageAgeBlueEyes =  Math.round(sumOfBlueEyeAges / numberBlueEyes);
              })
          );
    } else {
      this.averageAgeBlueEyes = 0;
    }

  }

}

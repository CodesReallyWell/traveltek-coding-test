import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { People } from '../model/people';
import { of } from 'rxjs';
import { count, map } from 'rxjs/operators';


@Component({
  selector: 'app-eye-color',
  templateUrl: './eye-color.component.html',
  styleUrls: ['./eye-color.component.css']
})
export class EyeColorComponent implements OnChanges, OnInit {
  @Input()
  people: People[];
  greenEyes: number;
  constructor() { }

  ngOnInit() {
    this.countGreenEyes();
  }

  ngOnChanges() {
    this.countGreenEyes();
  }

  private countGreenEyes() {
    if (this.people && this.people.length > 0) {
      of(...this.people)
        .pipe(map((person: People) => person.eyeColor))
        .pipe(count(eyeColor => eyeColor === 'green'))
        .subscribe(greenEyes => this.greenEyes = greenEyes);
    }
  }

}

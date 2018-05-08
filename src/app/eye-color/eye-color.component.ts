import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { People } from '../model/people';
import { Observable, of } from 'rxjs';
import { count, flatMap } from 'rxjs/operators';


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
    this.greenEyes = 0;
  }

  ngOnChanges() {

  }

  private countGreenEyes(){
    if (this.people && this.people.length > 0) {
      of(this.people)
        .pipe(flatMap((person: People) => person.eyeColor))
        .pipe(count(eyeColor => eyeColor === 'green'))
        .subscribe(greenEyes => this.greenEyes = greenEyes);
    }
  }

}

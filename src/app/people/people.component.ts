import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import {People} from '../model/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  public people: People;

  constructor( private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getPeople().subscribe((people: People) => {
      this.people = people; // store
    } );
  }

}

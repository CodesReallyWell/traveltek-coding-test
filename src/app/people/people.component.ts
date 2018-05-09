import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Person } from '../model/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  public people: Person;

  constructor( private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getPeople().subscribe((people: Person) => {
      this.people = people; // store
    } );
  }

}

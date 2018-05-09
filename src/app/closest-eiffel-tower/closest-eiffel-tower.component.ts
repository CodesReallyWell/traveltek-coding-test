import {Component, OnInit, OnChanges, Input} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { map, min } from 'rxjs/operators';
import { from } from 'rxjs';
import { Person } from '../model/people';

@Component({
  selector: 'app-closest-eiffel-tower',
  templateUrl: './closest-eiffel-tower.component.html',
  styleUrls: ['./closest-eiffel-tower.component.css']
})
export class ClosestEiffelTowerComponent implements OnChanges, OnInit {
  @Input()
  people: Person[];
  minPersonDistance: PersonDistance;
  gmapsUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.calculateClosestEiffelTower();
  }

  ngOnChanges() {
    this.calculateClosestEiffelTower();
  }

  private calculateClosestEiffelTower() {
    if (this.people && this.people.length > 0) {
      from(this.people)
        .pipe(
          map((person: Person) => {
            return {
              person: person,
              minDistanceEiffel: this.calculateDistance(person.latitude, person.longitude)
            };
          }),
          min((personDistance1, personDistance2) => {
            return personDistance1.minDistanceEiffel - personDistance2.minDistanceEiffel;
          })
        )
        .subscribe((minPersonDistance) => {
          this.minPersonDistance = minPersonDistance;
          this.minPersonDistance.minDistanceEiffel = Math.round(minPersonDistance.minDistanceEiffel);
          this.gmapsUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            'https://www.google.com/maps/embed/v1/place?key=AIzaSyBms_IawGN_ayMU6_5F-DuzymDBRVGbyaU&q='
            + this.minPersonDistance.person.latitude + ',' + this.minPersonDistance.person.longitude
            + '&zoom=6');
        });
    }
  }

  private calculateDistance(latitude1, longitude1) {
    const eiffelLatitude = 48.8584;
    const eiffelLongitude = 2.2945;
    const earthRadius = 6371; // km
    const latitudeDifference = this.toRadians(eiffelLatitude - latitude1);
    const longitudeDifference = this.toRadians(eiffelLongitude - longitude1);
    const latitude1Radians = this.toRadians(latitude1);
    const latitude2Radians = this.toRadians(eiffelLatitude);

    const a = Math.sin(latitudeDifference / 2) * Math.sin(latitudeDifference / 2) +
      Math.sin(longitudeDifference / 2) * Math.sin(longitudeDifference / 2) * Math.cos(latitude1Radians) * Math.cos(latitude2Radians);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRadius * c;
  }

  private toRadians(value) {
    return value * Math.PI / 180;
  }

}

interface PersonDistance {
  person: Person;
  minDistanceEiffel: number;
}

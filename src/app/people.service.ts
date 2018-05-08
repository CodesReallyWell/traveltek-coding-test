import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get('assets/fakepeople.json').map((data) => {
      console.log(data);
    });
  }
}

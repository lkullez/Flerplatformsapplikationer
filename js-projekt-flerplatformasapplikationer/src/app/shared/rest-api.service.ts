import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jokes } from '../shared/jokes';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

apiURL = 'https://sv443.net/jokeapi/category/[Category_Name]';

  constructor(private http: HttpClient) { }
}


// Http Options
httpOptions = {
headers: new HttpHeaders({
'Content-Type': 'application/json'
})
}
// HttpClient API get() method => Fetch employees list
getJokes(): Observable<Jokes> {
return this.http.get<jokes>(this.apiURL + '/jokes')
}
// HttpClient API get() method => Fetch employee
getJokes(id): Observable<jokes> {
return this.http.get<Jokes>(this.apiURL + '/jokes/' + id)

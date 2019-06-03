import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient){

  }

  ngOnInit(){
  let obs = this.http.get('https://sv443.net/jokeapi/category/Miscellaneous?blacklistFlags=nsfw');
  obs.subscribe((response) => console.log(response));
  }
}

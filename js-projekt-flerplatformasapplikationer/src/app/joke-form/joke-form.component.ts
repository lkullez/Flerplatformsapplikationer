import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {

  category: string = " ";
  blacklist: string = " ";
  response: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  search(){
    let data = this.http.get('https://sv443.net/jokeapi/category/' + this.category + '?blacklistFlags=' + this.blacklist);
    console.log(data)
    data.subscribe((response) => {
      this.response = response;
      console.log(this.response)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from 'src/app/joke.ts'

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {

  category: string = " ";
  blacklist: string = " ";
  response: any;
  //jokes: Array<{Joke}> = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  search(){
    if(this.category == " "){
      console.log("error")
    }
    let data = this.http.get('https://sv443.net/jokeapi/category/' + this.category + '?blacklistFlags=' + this.blacklist);
    console.log(data)
    data.subscribe((response) => {
      this.response = response;
      console.log(this.response)
      /*let joke = new Joke();
      joke.content = this.response.joke;
      this.jokes.push(joke);
      console.log(jokes)*/
    })
  }

}

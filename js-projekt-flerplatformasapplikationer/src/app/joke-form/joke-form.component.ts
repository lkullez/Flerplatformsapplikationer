import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from '../Joke'

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {

  jokes: Joke[] = [];
  category: string = " ";
  blacklist: string = " ";
  response: any;
  newJoke: Joke = new Joke();

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  search(){
    if(this.category == " "){
      console.log("error")
    }
    let data = this.http.get('https://sv443.net/jokeapi/category/' + this.category + '?blacklistFlags=' + this.blacklist);
    //console.log(data)
    data.subscribe((response) => {
      this.response = response;
      //console.log(this.response)


      let joke = this.newJoke;


      this.newJoke.single = this.response.joke;
      this.newJoke.setup = this.response.setup + " ";
      this.newJoke.delivery = this.response.delivery;
      console.log(this.jokes)
      this.jokes.push(joke);
      this.newJoke = new Joke();

    })
  }

}

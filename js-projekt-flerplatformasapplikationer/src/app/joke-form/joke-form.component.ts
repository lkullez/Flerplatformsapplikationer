import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from '../joke'

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

    let storage = JSON.parse(localStorage.getItem('joke'));

    console.log(storage[0].setup)


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
      if (this.response.type == "twopart"){
        this.newJoke.setup = this.response.setup + " ";
        this.newJoke.delivery = this.response.delivery;
      }

      console.log(this.jokes)
      this.jokes.push(joke);
      this.newJoke = new Joke();

      let storedJokes;

      storedJokes = this.jokes;

      localStorage.setItem('joke', JSON.stringify(storedJokes));

    })
  }

}

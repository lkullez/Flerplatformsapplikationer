import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from '../Joke'; //Låt vara

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
  storage: [];
  length: number = 0;
  res = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.length = JSON.parse(localStorage.getItem('length'));
    this.storage = JSON.parse(localStorage.getItem('joke'));
    console.log(this.storage)



    for (let y = 0; y < this.length; y++){
      this.res.push(y);
      this.jokes.push(this.storage[y]);
    }

  }


  search(){
    if(this.category == " "){
      console.log("error")
    }
    let data = this.http.get('https://sv443.net/jokeapi/category/' + this.category + '?blacklistFlags=' + this.blacklist);
    data.subscribe((response) => {
      this.response = response;

      let joke = this.newJoke;

      this.newJoke.single = this.response.joke;
      if (this.response.type == "twopart"){
        console.log("true")
        this.newJoke.single = "";
        this.newJoke.setup = this.response.setup + " ";
        this.newJoke.delivery = this.response.delivery;
      }

      this.jokes.push(joke);
      this.newJoke = new Joke();
      console.log(this.jokes)
      let storedJokes;

      storedJokes = this.jokes;


      localStorage.setItem('joke', JSON.stringify(storedJokes));
      this.length++;
      localStorage.setItem('length', JSON.stringify(this.length));


    })
  }

}

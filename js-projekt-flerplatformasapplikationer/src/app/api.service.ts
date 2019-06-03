import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://sv443.net/jokeapi/category/[Category_Name]';

  constructor(private httpClient: HttpClient) { }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdviceDataService {
  url = "	https://api.adviceslip.com/advice";

  constructor(private http: HttpClient) { }
  users() {
    return this.http.get(this.url);
  }
}


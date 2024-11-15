import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private url="https://foodshop-73bd9-default-rtdb.europe-west1.firebasedatabase.app/termekek.json"
  constructor(private http:HttpClient) { }

  getFoods(){
    return this.http.get(this.url)
  }
}

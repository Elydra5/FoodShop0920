import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KosarService {

  private kosar:any=[]
  private kosarSub = new BehaviorSubject([])

  constructor() { }

  getCart(){
    return this.kosarSub
  }

  addFood(food:any, db:any){
    food.db=db
    delete food.leiras
    this.kosar.push(food)
    this.kosarSub.next(this.kosar)
  }
}

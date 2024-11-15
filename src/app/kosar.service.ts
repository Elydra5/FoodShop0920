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

  addFood(food:any, db:Number){
    if(food.db==null){
      food.db=db
      this.kosar.push(food)
      this.kosarSub.next(this.kosar)
      return
    }
    else{
      this.kosar.forEach((element:any) => {
        if(element.id==food.id){
          element.db=Number(element.db)+Number(db)
          this.kosarSub.next(this.kosar)
          return
        }
      })
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KosarService {

  private kosar:any=[]
  private kosarSub = new BehaviorSubject([])
  private url = "https://foodshop-73bd9-default-rtdb.europe-west1.firebasedatabase.app/rendeles.json"

  constructor(private http:HttpClient) { }

  addOrder(name:any, address:any){
    let body = {name:name, address:address, cart:this.kosar}
      this.http.post(this.url, body).subscribe(
        (res)=> console.log(res)
      )
  }

  getCart(){
    return this.kosarSub
  }

  addFood(food:any, db:Number){
    if(food.db==null){
      food.db=db
      this.kosar.push(food)
      this.kosarSub.next(this.kosar)
    }
    else{
      this.kosar.forEach((element:any) => {
        if(element.id==food.id){
          element.db=Number(element.db)+Number(db)
          this.kosarSub.next(this.kosar)
        }
      })
      // this.kosar[i].db=db
    }
  }


}

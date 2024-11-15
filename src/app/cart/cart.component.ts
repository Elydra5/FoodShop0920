import { Component, OnDestroy, OnInit } from '@angular/core';
import { KosarService } from '../kosar.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit, OnDestroy{

  feliratkozas!:Subscription
  kosar:any

  constructor(private ks:KosarService, private route:Router){

  }

  ngOnInit(): void {
    this.feliratkozas = this.ks.getCart().subscribe(
      (res)=>this.kosar=res
    )
  }

  ngOnDestroy(): void {
    if(this.feliratkozas) this.feliratkozas.unsubscribe()
  }

  price(food:any){
    return Number(food.db)*Number(food.ar)
  }

  leadas(){
      this.route.navigate(['/leadas'])
  }

}

import { Component } from '@angular/core';
import { KosarService } from '../kosar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rendelesleadas',
  templateUrl: './rendelesleadas.component.html',
  styleUrl: './rendelesleadas.component.css'
})
export class RendelesleadasComponent {

  name=""
  address=""
  constructor(private kosar:KosarService, private router:Router) {}
  addOrder(){
    this.kosar.addOrder(this.name, this.address)
    this.router.navigate(['/home'])
  }
}

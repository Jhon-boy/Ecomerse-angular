import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent{
  @Input() products: any | undefined;  

  constructor(private router: Router){

  }
  /**
   * Let go to other pages... 
   * @param id 
   */
  navigateTo(id: number) {
    console.log('ID DE REGISTRO: ', id);
    this.router.navigate(['/products', id])
  }
}

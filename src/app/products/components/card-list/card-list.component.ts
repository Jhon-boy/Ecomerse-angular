import { Component, inject, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent{
  @Input() products: any | undefined;  

  
}

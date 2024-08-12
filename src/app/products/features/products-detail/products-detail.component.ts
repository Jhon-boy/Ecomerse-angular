import { Component, inject, OnInit } from '@angular/core';
import { ProductStateService } from '../../data/product-state.Service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-detail.component.html',
  styles: ``,
  providers: [ProductStateService]
})
export default class ProductsDetailComponent implements OnInit {

  // Constructor
  constructor(private router: ActivatedRoute) { }

  // OUR state about ProductService
  productState = inject(ProductStateService);

  //Let know our state
  pruduct = this.productState.state;
  //- Id Product
  idProduct: number = 0;

  ngOnInit(): void {
    const idParam = this.router.snapshot.paramMap.get('id');
    if (idParam) {
      this.idProduct = parseInt(idParam);
      this.productState.getProductById(this.idProduct);
    } else {
      console.log('ERROR BRO')
    }

  }

}

import { Component, inject, OnInit } from '@angular/core';
import { ProductStateService } from '../../data/product-state.Service';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { ProductService } from '../../data/Products.Service';
import { SpinnerComponent } from '../../../utils/spinner/spinner.component';
import { ErrorPageComponent } from '../../../utils/error-page/error-page.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CardListComponent, SpinnerComponent, ErrorPageComponent, CommonModule],
  templateUrl: './products-list.component.html',
  styles: ``,
  providers: [ProductStateService]
})
export default class ProductsListComponent implements OnInit {

  paginas: number[] = [];

  productsState = inject(ProductStateService);
  // declare we state
  state = this.productsState.state;

  constructor(private productService: ProductService) {

  }
  ngOnInit(): void {
    this.paginas = this.productService.getPaginacion();
  }

  //local Method to let change the number of pages
  updatePageLocal(page: number) { 
    this.productsState.updatePage(page);
  }
  //Let back to previous page 
  previusPage() {
    if(this.state().page > 1){
      this.productsState.updatePage(this.state().page -1);
    }
  }
  //Let go to next page
  nextPage(){
    this.productsState.updatePage(this.state().page + 1);
  }

}


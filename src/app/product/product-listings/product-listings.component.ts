import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';



@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent {

  // products: any =[1, 2, 3, 4]
  products: any

  constructor(private productService: ProductService){}

  ngOnInit(){
    // this.products = this.productService.getProducts()

    const productObservable = this.productService.getProducts()
    productObservable.subscribe(
      (data) => {
        this.products = data
        console.log('次のデータが出力されました' + data);
        debugger
      },
      (err) => {console.error('次のエラーが発生しましt: ' + err);},
      () => {console.log('done');},
    )


    // const observable = new Observable((subscriber) => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.error('エラーが発生');
    //   setTimeout(() => {
    //     subscriber.next(3);
    //     subscriber.complete();
    //   }, 1000);
    // });

    // console.log('just before subscribe');
    // observable.subscribe({
    //   next(data) { console.log('次のデータが出力されました' + data);},
    //   error(err) {console.error('次のエラーが発生しましt: ' + err);},
    //   complete() {console.log('done');},
    // });
    // console.log('just after subscribe');
  }

}

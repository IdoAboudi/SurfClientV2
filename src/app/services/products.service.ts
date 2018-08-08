import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Product} from '../models/Product';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {AggProduct} from '../models/AggProduct';


@Injectable()
export class ProductService{

  private allProductsUrl = 'http://localhost:8080/api/products';
  private productUrl = 'http://localhost:8080/api/product/getone/:id';
  private updateProductUrl = 'http://localhost:8080/api/product/update';
  private deleteProductUrl = 'http://localhost:8080/api/product/delete/:id';
  private insertProductUrl = 'http://localhost:8080/api/product/upload';
  private allProductsByHandUrl = 'http://localhost:8080/api/byhand';
  // private headers = new Headers();


  private products: Observable<Array<Product>> = new Observable<Array<Product>>();
  private productsByHand: Observable<Array<AggProduct>> = new Observable<Array<AggProduct>>();

  //this loads the http client into the service automatically
  constructor(private http: Http) {

  }
    getAllProducts(): Observable<Product[]>{
      this.products =  this.http.get(this.allProductsUrl)
      // ...and calling .json() on the response to return data
        .map((res:Response) => res.json());
        //...errors if any
      return this.products;
  }

  getAllProductsByHand(): Observable<AggProduct[]>{
    this.productsByHand =  this.http.get(this.allProductsByHandUrl)
    // ...and calling .json() on the response to return data
      .map((res:Response) => res.json());
    //...errors if any
    return this.productsByHand;
  }

  getOneProduct(id: string): Observable<Product>{
    return this.http.get(this.productUrl.replace(':id',id))
      .map((res: Response) => res.json());
  }

  updateProduct(product: Product){
    return this.http.post(this.updateProductUrl,product);
  }

  deleteProduct(id: string){
    return this.http.get(this.deleteProductUrl.replace(':id', id))
      .map((res: Response) => res.json());
  }

  insertProduct(product: Product){
    console.log(`inserting ${JSON.stringify(product)}`)
    return this.http.post(this.insertProductUrl,product);
  }
}


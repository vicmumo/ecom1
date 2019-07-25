import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  items: Observable<any[]>; //we need to create an observable ‘items: Observable<any[]>’ its datatype is ‘any’ so that it can have any sort of data.
  
  constructor(db: AngularFirestore) {this.items = db.collection('items').valueChanges(); }

  ngOnInit() {
  }

}

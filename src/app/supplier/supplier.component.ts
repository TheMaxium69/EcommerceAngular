import { Component, Input, OnInit } from '@angular/core';
import { Supplier } from '../model/supplier.model';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  @Input() supp = new Supplier(1, '1984', 'Book', 'lorem ipsum dolor sit', 'test');

  constructor() { }

  ngOnInit(): void {
  }

}

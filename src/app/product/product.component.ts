import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Product} from '../model/product.model';
import {Test2Service, User2} from '../test2.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() prod!: Product;
  users: User2[] = [];

  constructor(private testService: Test2Service) { }

  ngOnInit(): void {
    this.testService.findAll().subscribe(data => this.users = data);
  }

  @HostListener('click')
  clickOnMe(): void {
    console.log('You clicked on product');
  }



}

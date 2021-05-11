import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product2, Test2Service, User2, User3} from '../test2.service';
import {TestService} from '../test.service';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private route: ActivatedRoute, private test2Service: Test2Service, private testService: TestService) { }

  users2!: Product2;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.test2Service.findOone(id).subscribe(data => this.users2 = data);
    console.log(this.users2);

  }

}

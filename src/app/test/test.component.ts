import { Component, OnInit } from '@angular/core';
import {TestService/*, User*/} from '../test.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  //users: User[] = [];

  ourform = new FormGroup({
  });
  /*
  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.findAll().subscribe(data => this.users = data);
  }*/

  constructor(private fb: FormBuilder,
              private ps: TestService) { }

  ngOnInit(): void  {
    this.ourform = this.fb.group({
      name: [''],
      category: [''],
      description: [''],
      price: [0],
      promo: [],
      active: [true]
    });
    //this.ps.findAll().subscribe(data => this.fb.group() = data);
  }


  addClient(): void {
    //this.formSubmited = true;
    console.log(this.ourform.value);
    this.ps.add(this.ourform.value).subscribe(v => console.log(v));
    this.ourform.reset();

  }
}

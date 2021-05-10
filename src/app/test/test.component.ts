import { Component, OnInit } from '@angular/core';
import {TestService, User} from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  users: User[] = [];

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.findAll().subscribe(data => this.users = data);
  }

}

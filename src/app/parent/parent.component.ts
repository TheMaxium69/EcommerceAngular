import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  childText = '';

  constructor() { }

  ngOnInit(): void {
  }

  receiveMessage(param: string): void{
    console.log('Parent, message reçu: ', param)
    this.childText += param;
  }

}

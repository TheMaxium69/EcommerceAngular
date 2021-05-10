import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {

  @Output() out: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() { }

  sendMessage(): void {
    console.log('article 1');
    this.out.emit('Article 1 ');
  }

  ngOnInit(): void {
  }

}

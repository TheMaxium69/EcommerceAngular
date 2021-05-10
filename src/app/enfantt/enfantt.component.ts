import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enfantt',
  templateUrl: './enfantt.component.html',
  styleUrls: ['./enfantt.component.css']
})
export class EnfanttComponent implements OnInit {

  @Output() out: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() { }

  sendMessage(): void {
    console.log('article 2');
    this.out.emit('Article 2 ');
  }

  ngOnInit(): void {
  }

}

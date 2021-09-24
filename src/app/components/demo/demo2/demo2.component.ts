import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {

  prop1 : string = "C'est pas faux"
  prop2 : number = 123.437
  prop3 : Date = new Date()
  constructor() { }

  ngOnInit(): void {
  }

}

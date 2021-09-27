import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent implements OnInit {

  @Input() title : string = ""
  @Input() nbr : number = 0

  @Output() monEvent : EventEmitter<string> = new EventEmitter<string>()
  @Output() gerard : EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  methode1() {
    this.monEvent.emit("Salut de l'enfant")
  }

  methode2() {
    this.gerard.emit("Reponse de gérard")
  }


}

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-exo2-list',
  templateUrl: './exo2-list.component.html',
  styleUrls: ['./exo2-list.component.scss']
})
export class Exo2ListComponent implements OnInit {

  @Input() liste! : string[]

  @Output() deleteEvent : EventEmitter<number> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  supprimer(index : number) {
    this.deleteEvent.emit(index)
  }
}

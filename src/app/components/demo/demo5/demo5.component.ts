import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component implements OnInit {

  titrePourEnfant : string = "titre pour mon enfant"

  maProp : string = "En attente d'une réponse de l'enfant"

  constructor() { }

  ngOnInit(): void {
  }

  reactionDeLEnfant(s : string) {
    this.maProp = s
  }

}

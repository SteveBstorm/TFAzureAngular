import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss']
})
export class Exo2Component implements OnInit {

  listeArticle : string[] = []

  nouvelArticle : string = ""

  constructor() { }

  ngOnInit(): void {
  }

  ajoutArticle() {
    this.listeArticle.push(this.nouvelArticle)
  }

  supprimerArticle(index : number) {
    this.listeArticle.splice(index, 1)
  }


}

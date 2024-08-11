import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  imgSrc!:string
  isClicked: boolean = false;
  open(src:string) {
    this.isClicked = !this.isClicked;
    this.imgSrc = src
  }
  isClose(){
    this.isClicked =false
  }
}

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
      imgSrc: string= '../../assets/image/avataaars.svg';
      title: string= 'START FRAEMEWORK';
      desc: string = 'Graphic Artist - Web Designer - Illustrator';
}
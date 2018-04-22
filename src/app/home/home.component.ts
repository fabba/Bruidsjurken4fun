import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imageSources: string[] = ['../../assets/foto-home.jpg',
      '../../assets/foto-home1.jpg',
      '../../assets/foto-home3.jpg',
      '../../assets/foto-home4.jpg'];

  constructor() { }

  ngOnInit() {
  }

}

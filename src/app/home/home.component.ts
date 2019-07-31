import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imageSources: string[] = [
      '../../assets/home_2.JPG',
      '../../assets/home_13.JPG',
      '../../assets/home_14.JPG',
      '../../assets/home_15.JPG',
      '../../assets/home_16.jpg',
      '../../assets/home_17.jpg',
      '../../assets/home_18.jpg'
  ];

  constructor() { }

  ngOnInit() {
  }

}

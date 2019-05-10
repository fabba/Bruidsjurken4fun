import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imageSources: string[] = [
      '../../assets/home_4.JPG',
      '../../assets/home_3.JPG',
      '../../assets/home_8.JPG',
      '../../assets/home_5.JPG',
      '../../assets/home_9.JPG',
      '../../assets/home_2.JPG',
      '../../assets/home_10.JPG',
      '../../assets/home_7.JPG'
  ];

  constructor() { }

  ngOnInit() {
  }

}

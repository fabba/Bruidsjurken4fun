import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imageSources = [
    '../../assets/IMG_1249.JPG',
    '../../assets/IMG_2707.JPG',
    '../../assets/IMG_2883.JPG',
    '../../assets/IMG_7163.JPG',
    '../../assets/IMG_8414.JPG',
    '../../assets/IMG_8587.JPG',
    // Add more images as needed
  ];

  constructor() { }

  ngOnInit() {
  }

}

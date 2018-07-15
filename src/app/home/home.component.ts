import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imageSources: string[] = [
      '../../assets/home_1.jpg',
      '../../assets/home_2.JPG',
      '../../assets/home_3.JPG',
      '../../assets/home_4.JPG',
      '../../assets/home_5.JPG',
      '../../assets/home_6.JPG'];

  constructor() { }

  ngOnInit() {
  }

}

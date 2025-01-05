import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  images = [
    { src: 'assets/IMG_1249.JPG'},
    { src: 'assets/IMG_2707.JPG'},
    { src: 'assets/IMG_2883.JPG'},
    { src: 'assets/IMG_7163.JPG'},
    { src: 'assets/IMG_8414.JPG'},
    { src: 'assets/IMG_8587.JPG'},
    { src: 'assets/fotos-page3.jpg'},
    { src: 'assets/fotos-page4.jpg'},
    { src: 'assets/fotos-page5.jpg'},
    { src: 'assets/fotos-page6.jpg'},
    { src: 'assets/fotos-page7.jpg'},
    { src: 'assets/fotos-page8.jpg'},
    { src: 'assets/fotos-page9.jpg'},
    { src: 'assets/fotos-page10.jpg'},
    { src: 'assets/fotos-page11.jpg'},
    { src: 'assets/fotos-page12.jpg'},
    { src: 'assets/fotos-page13.jpg'},
    { src: 'assets/fotos-page14.jpg'},
    { src: 'assets/fotos-page15.jpg'},
    { src: 'assets/fotos-page16.jpg'},
    { src: 'assets/foto-home1.jpg'},
    { src: 'assets/foto-home2.jpg'},
    { src: 'assets/foto-home3.jpg'},
    { src: 'assets/foto-home4.jpg'},

    // Add more images as needed
  ];
  constructor() { }

  ngOnInit() {
  }

}

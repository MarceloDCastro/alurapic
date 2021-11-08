import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  @Input() url: string = '';
  @Input() description: string = '';
  @Input() creditos: string = '';
  @Input() creditosUrl: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

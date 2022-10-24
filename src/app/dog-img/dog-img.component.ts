import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dog-img',
  templateUrl: './dog-img.component.html',
  styleUrls: ['./dog-img.component.css'],
})
export class DogImgComponent {

  @Input() name: string = '';
  @Input() img: string = '';
}

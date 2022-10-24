import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  @Input() breeds: string[] = [];

  @Output() choosenBreed = new EventEmitter<string>();

  chooseBreed(value: string) {
    this.choosenBreed.emit(value);
    console.log(value);
  }
}

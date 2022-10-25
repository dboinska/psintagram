import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

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




  // @HostListener('option:keydown.enter', ['chooseBreed'])
  // handleKeyDown(event: KeyboardEvent) {
  //   // this.choosenBreed.emit(value);
  //   console.log('clicked');

  // }

  // @Output() keydownEnter = new EventEmitter();
}

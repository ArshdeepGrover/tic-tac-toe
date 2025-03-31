import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  @Input('squareNumber') squareNumber: number = 0;
  @Input('text') text: string = '';
  @Input('enabled') enabled: boolean = true;
  @Output('onSquareClick') onSquareClick: EventEmitter<number> =
    new EventEmitter();

  handleClick() {
    this.onSquareClick.emit(this.squareNumber);
  }
}

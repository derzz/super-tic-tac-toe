import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'square',
  standalone: true,
  imports: [],
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss'
})
export class SquareComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<void>();

  onClick(): void{
    this.valueChange.emit();
  }
}

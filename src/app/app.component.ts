import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InnerBoardComponent } from './inner-board/inner-board.component';
import { OuterBoardComponent } from './outer-board/outer-board.component';
import { InstructionComponent } from './instruction/instruction.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InnerBoardComponent, OuterBoardComponent, InstructionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'superTicTacToe';
}

import { Component, EventEmitter , Output, Input} from '@angular/core';
import { SquareComponent } from '../square/square.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inner-board',
  standalone: true,
  imports: [SquareComponent, CommonModule],
  templateUrl: './inner-board.component.html',
  styleUrl: './inner-board.component.scss'
})
export class InnerBoardComponent {
  board: string[] = [];
  winner = 0;
  // 0 if no winner, -1 if complete loss, 1, 2 based on player that won
  @Output() winnerEmitter = new EventEmitter<number>();
  // Outputs 0-8 based on what position in the square is clicked
  @Output() clickEmitter = new EventEmitter<number>();
  @Input() activeIntake = true;
  @Input() player = '';

  ngOnInit(){
    this.board = new Array(9).fill('');
  }


  // Return 1 if player 1 wins, 2 if 2 wins, 0 if no win
  // Returns -1 if a tie occurs
  check_win(): number {
    const winningCombinations = [
      // Rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Columns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonals
      [0, 4, 8],
      [2, 4, 6]
    ];

    let filled = 0;

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        return this.board[a] === 'X' ? 1 : 2;
      }
    }

    for (let space of this.board){
      if(space !== '') filled += 1
    }

    if(filled == 9) return -1;

    return 0;
  }

  updateValue(index: number){
    if(this.board[index] === ''){
      this.board[index] = this.player;

      let result = this.check_win();

      if (result === 1 || result === 2){
        this.winner = result;
        this.winnerEmitter.emit(this.winner);

      }
      else if(result === -1){
        this.winner = -1;
        this.winnerEmitter.emit(this.winner);
      }

      this.clickEmitter.emit(index);
    }

  }
}

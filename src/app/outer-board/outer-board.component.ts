import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InnerBoardComponent } from '../inner-board/inner-board.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'outer-board',
  standalone: true,
  imports: [InnerBoardComponent, RouterOutlet, CommonModule],
  templateUrl: './outer-board.component.html',
  styleUrl: './outer-board.component.scss'
})
export class OuterBoardComponent {
  message = '';
  board: number[] = [];
  active: boolean[] = [];
  player = 'X';


  ngOnInit(){
    this.board = new Array(9).fill(0);
    this.active = new Array(9).fill(true);
  }

  // 1 for player 1, 2 for player 2, -1 for tie
  // winner is based on above, position sets what board won
  recieveWinner(winner: number, position: number){
    this.board[position] = winner;
    console.log(position + " has a winner!");
    winner = this.check_win();
    console.log("Finished checking win return value is " + winner)

    if(winner != 0){
      this.message = "Player " + winner + " wins!"
      this.active.fill(false);
    }
  }


  check_win(): number {
    console.log("Checking win");
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
        console.log("Winner detected, returning " + this.board[a])
        return this.board[a];
      }
    }

    for (let space of this.board){
      if(space !== 0) filled += 1
    }

    if(filled == 9){
      console.log("Returning tie");
      return-1;
    }
    console.log("Returning no win");

    return 0;
  }

  // Called on a click
  updateActive(pos: number){
    console.log("updateActive called " + pos)
    if(this.board[pos] == 0){
      for(let i = 0; i < 8; ++i){
        if(i != pos) this.active[i] = false
        else this.active[i] = true
      }
    }
    else this.active.fill(true)

    this.player = this.player === 'X' ? 'O' : 'X';
    console.log("Finished updating!");
  }
}

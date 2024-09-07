import { Routes } from '@angular/router';
import { OuterBoardComponent } from './outer-board/outer-board.component';
import { InstructionComponent } from './instruction/instruction.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'game', component: OuterBoardComponent},
  {path: 'help', component: InstructionComponent}
];

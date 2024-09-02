import { Component } from '@angular/core';
import { StatsBackgroundComponent } from '../stats-background/stats-background.component';

@Component({
  selector: 'app-game-stats-root',
  standalone: true,
  imports: [StatsBackgroundComponent],
  templateUrl: './game-stats-root.component.html',
  styleUrl: './game-stats-root.component.css'
})
export class GameStatsRootComponent {

}

import { Component } from '@angular/core';
import { CharactersCreationComponent } from '../characters-creation/characters-creation.component';
import { ButtonPanelStatsComponent } from '../button-panel-stats/button-panel-stats.component';

@Component({
  selector: 'app-stats-background',
  standalone: true,
  imports: [CharactersCreationComponent, ButtonPanelStatsComponent],
  templateUrl: './stats-background.component.html',
  styleUrl: './stats-background.component.css'
})
export class StatsBackgroundComponent {

}

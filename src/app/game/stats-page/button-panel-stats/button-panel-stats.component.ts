import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import the RouterModule
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-button-panel-stats',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './button-panel-stats.component.html',
  styleUrl: './button-panel-stats.component.css'
})
export class ButtonPanelStatsComponent {

}

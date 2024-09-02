import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import the RouterModule
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-button-panel-settings',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './button-panel-settings.component.html',
  styleUrl: './button-panel-settings.component.css'
})
export class ButtonPanelSettingsComponent {

}

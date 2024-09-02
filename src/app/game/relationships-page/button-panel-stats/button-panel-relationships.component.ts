import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import the RouterModule
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-button-panel-relationships',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './button-panel-relationships.component.html',
  styleUrl: './button-panel-relationships.component.css'
})
export class ButtonPanelRelationshipsComponent {

}

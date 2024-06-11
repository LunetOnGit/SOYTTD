import { Component, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import the RouterModule
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-button-panel',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './button-panel.component.html',
  styleUrl: './button-panel.component.css'
})

export class ButtonPanelComponent {
}

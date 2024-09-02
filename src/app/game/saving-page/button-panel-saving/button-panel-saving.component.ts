import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import the RouterModule
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-button-panel-saving',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './button-panel-saving.component.html',
  styleUrl: './button-panel-saving.component.css'
})
export class ButtonPanelSavingComponent {

}

import { Component } from '@angular/core';
import { SavingDescriptionComponent } from '../saving-description/saving-description.component';
import { ButtonPanelSavingComponent } from '../button-panel-saving/button-panel-saving.component';
import { SavingButtonComponent } from '../saving-button/saving-button.component';

@Component({
  selector: 'app-saving-background',
  standalone: true,
  imports: [SavingDescriptionComponent, ButtonPanelSavingComponent, SavingButtonComponent],
  templateUrl: './saving-background.component.html',
  styleUrl: './saving-background.component.css'
})
export class SavingBackgroundComponent {

}

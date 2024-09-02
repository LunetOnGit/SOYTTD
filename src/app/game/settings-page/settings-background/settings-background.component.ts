import { Component } from '@angular/core';
import { SettingsDescriptionComponent } from '../settings-description/settings-description.component';
import { ButtonPanelSettingsComponent } from '../button-panel-settings/button-panel-settings.component';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-settings-background',
  standalone: true,
  imports: [SettingsDescriptionComponent, SettingsComponent, ButtonPanelSettingsComponent],
  templateUrl: './settings-background.component.html',
  styleUrl: './settings-background.component.css'
})
export class SettingsBackgroundComponent {

}

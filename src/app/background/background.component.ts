import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { TextSectionComponent } from '../text-section/text-section.component';
import { ButtonPanelComponent } from '../button-panel/button-panel.component';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [TitleComponent, TextSectionComponent, ButtonPanelComponent],
  templateUrl: './background.component.html',
  styleUrl: './background.component.css'
})
export class BackgroundComponent {

}

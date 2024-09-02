import { Component } from '@angular/core';
import { RelationshipsDescriptionComponent } from '../relationships-description/relationships-description.component';
import { TrustLevelComponent } from '../trust-level/trust-level.component';
import { ButtonPanelRelationshipsComponent } from '../button-panel-stats/button-panel-relationships.component';

@Component({
  selector: 'app-relationship-background',
  standalone: true,
  imports: [RelationshipsDescriptionComponent, TrustLevelComponent, ButtonPanelRelationshipsComponent],
  templateUrl: './relationship-background.component.html',
  styleUrl: './relationship-background.component.css'
})
export class RelationshipBackgroundComponent {

}

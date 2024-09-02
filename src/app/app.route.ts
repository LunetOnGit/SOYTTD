import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RelationshipBackgroundComponent } from './game/relationships-page/relationship-background/relationship-background.component';
import { GameStatsRootComponent } from './game/stats-page/game-stats-root/game-stats-root.component';
import { BackgroundComponent } from './background/background.component'
import { SettingsBackgroundComponent } from './game/settings-page/settings-background/settings-background.component';
import { GamePageComponent } from './game/game-page/game-page.component';
import { SavingBackgroundComponent } from './game/saving-page/saving-background/saving-background.component';

export const routes: Routes = [
    { path: "", component:BackgroundComponent, pathMatch:"full" },
    { path: 'stats', component:GameStatsRootComponent },
    { path: 'relationships', component:RelationshipBackgroundComponent },
    { path: 'settings', component:SettingsBackgroundComponent },
    { path: 'saving', component:SavingBackgroundComponent },
    { path: 'game', component:GamePageComponent }
];

import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GameStatsRootComponent } from './game/stats-page/game-stats-root/game-stats-root.component';
import { BackgroundComponent } from './background/background.component'

export const routes: Routes = [
    { path: "", component:BackgroundComponent, pathMatch:"full" },
    { path: 'stats', component:GameStatsRootComponent }
];

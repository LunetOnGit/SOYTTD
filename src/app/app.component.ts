import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundComponent } from './background/background.component';
import { FooterComponent } from './footer/footer.component';
import { SharedVariablesService } from './shared-variables.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BackgroundComponent,FooterComponent],
  providers: [SharedVariablesService],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'SOYTTD-web';
}

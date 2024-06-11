import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-persos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-persos.component.html',
  styleUrl: './liste-persos.component.css'
})
export class ListePersosComponent {
  names: string[] = ['Alice', 'Bob', 'Charlie'];
  ages: number[] = [25, 30, 35];
  urlList: string[] = [
    'https://static.wikia.nocookie.net/kimi-ga-shine/images/e/e5/Cara5-1.png/revision/latest/scale-to-width/360?cb=20190606233518',
    'https://static.wikia.nocookie.net/kimi-ga-shine/images/8/8f/Cara0-1.png/revision/latest/scale-to-width/360?cb=20190606115732',
    'https://static.wikia.nocookie.net/kimi-ga-shine/images/7/71/Cara3-1.png/revision/latest?cb=20190606143708'
  ];
}

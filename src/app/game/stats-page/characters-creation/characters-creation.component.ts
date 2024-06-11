import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedVariablesService } from '../../../shared-variables.service';

@Component({
  selector: 'app-characters-creation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [SharedVariablesService],
  templateUrl: './characters-creation.component.html',
  styleUrls: ['./characters-creation.component.css']
})
export class CharactersCreationComponent implements OnInit {
  names: string[];
  IQs: number[];
  strengths: number[];
  kindnesses: number[];
  sociabilities: number[];
  images: string[];

  constructor(private sharedVariablesService: SharedVariablesService) {}

  ngOnInit() {
    this.sharedVariablesService.names$.subscribe(names => this.names = names);
    this.sharedVariablesService.IQs$.subscribe(IQs => this.IQs = IQs);
    this.sharedVariablesService.strengths$.subscribe(strengths => this.strengths = strengths);
    this.sharedVariablesService.kindnesses$.subscribe(kindnesses => this.kindnesses = kindnesses);
    this.sharedVariablesService.sociabilities$.subscribe(sociabilities => this.sociabilities = sociabilities);
    this.sharedVariablesService.images$.subscribe(images => this.images = images);
  }

  addCharacter() {
    const newNames = [...this.names, ''];
    const newIQs = [...this.IQs, 5];
    const newStrengths = [...this.strengths, 5];
    const newKindnesses = [...this.kindnesses, 5];
    const newSociabilities = [...this.sociabilities, 5];
    const newImages = [...this.images, '../../../assets/characters/Rei.png'];

    this.sharedVariablesService.setNames(newNames);
    this.sharedVariablesService.setIQs(newIQs);
    this.sharedVariablesService.setStrengths(newStrengths);
    this.sharedVariablesService.setKindnesses(newKindnesses);
    this.sharedVariablesService.setSociabilities(newSociabilities);
    this.sharedVariablesService.setImages(newImages);
  }

  removeCharacter(index: number) {
    const newNames = [...this.names];
    const newIQs = [...this.IQs];
    const newStrengths = [...this.strengths];
    const newKindnesses = [...this.kindnesses];
    const newSociabilities = [...this.sociabilities];
    const newImages = [...this.images];

    newNames.splice(index, 1);
    newIQs.splice(index, 1);
    newStrengths.splice(index, 1);
    newKindnesses.splice(index, 1);
    newSociabilities.splice(index, 1);
    newImages.splice(index, 1);

    this.sharedVariablesService.setNames(newNames);
    this.sharedVariablesService.setIQs(newIQs);
    this.sharedVariablesService.setStrengths(newStrengths);
    this.sharedVariablesService.setKindnesses(newKindnesses);
    this.sharedVariablesService.setSociabilities(newSociabilities);
    this.sharedVariablesService.setImages(newImages);
  }

  onImageChange(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const newImages = [...this.images];
        newImages[index] = e.target.result; // Update image URL after file is read
        this.sharedVariablesService.setImages(newImages);
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  }

  onStatChange() {
    this.sharedVariablesService.setNames([...this.names]);
    this.sharedVariablesService.setIQs([...this.IQs]);
    this.sharedVariablesService.setStrengths([...this.strengths]);
    this.sharedVariablesService.setKindnesses([...this.kindnesses]);
    this.sharedVariablesService.setSociabilities([...this.sociabilities]);
    this.sharedVariablesService.setImages([...this.images]);
  }

  loadFirstPreset(): void {
    const newNames = ['Sara', 'Joe', 'Keiji', 'Kanna', 'Q-Taro', 'Shin', 'Reko', 'Nao', 'Kai', 'Gin', 'Alice', 'Mishima', 'Ranmaru', 'Hinako', 'Mai', 'Naomichi', 'Anzu', 'Shunsuke', 'Kugie', 'Megumi'];
    const newIQs = [7, 6, 8, 2, 5, 10, 6, 5, 9, 1, 4, 8, 6, 1, 4, 5, 3, 9, 7, 8];
    const newStrengths = [9, 8, 10, 1, 10, 0, 8, 4, 9, 1, 8, 7, 6, 1, 7, 10, 2, 3, 5, 9];
    const newKindnesses = [7, 10, 5, 9, 6, 2, 8, 7, 9, 8, 6, 9, 7, 10, 5, 5, 9, 5, 8, 3];
    const newSociabilities = [7, 10, 6, 6, 8, 4, 8, 5, 6, 8, 6, 7, 3, 4, 9, 4, 8, 3, 5, 2];
    const newImages = [
      '../../../assets/characters/Sara.png',
      '../../../assets/characters/Joe.png',
      '../../../assets/characters/Keiji.png',
      '../../../assets/characters/Kanna.png',
      '../../../assets/characters/Q-Taro.png',
      '../../../assets/characters/Shin.png',
      '../../../assets/characters/Reko.png',
      '../../../assets/characters/Nao.png',
      '../../../assets/characters/Kai.png',
      '../../../assets/characters/Gin.png',
      '../../../assets/characters/Alice.png',
      '../../../assets/characters/Mishima.png',
      '../../../assets/characters/Ranmaru.png',
      '../../../assets/characters/Hinako.png',
      '../../../assets/characters/Mai.png',
      '../../../assets/characters/Naomichi.png',
      '../../../assets/characters/Anzu.png',
      '../../../assets/characters/Shunsuke.png',
      '../../../assets/characters/Kugie.png',
      '../../../assets/characters/Megumi.png'
    ];

    this.sharedVariablesService.setNames(newNames);
    this.sharedVariablesService.setIQs(newIQs);
    this.sharedVariablesService.setStrengths(newStrengths);
    this.sharedVariablesService.setKindnesses(newKindnesses);
    this.sharedVariablesService.setSociabilities(newSociabilities);
    this.sharedVariablesService.setImages(newImages);
  }

  loadSecondPreset(): void {
    const newNames = ['Sara', 'Keiji', 'Kanna', 'Q-Taro', 'Shin', 'Reko', 'Gin', 'Alice', 'Mishima', 'Ranmaru', 'Hinako', 'Mai', 'Naomichi', 'Anzu', 'Shunsuke', 'Megumi'];
    const newIQs = [8, 8, 3, 4, 10, 6, 2, 5, 8, 6, 5, 6, 5, 4, 10, 9];
    const newStrengths = [9, 10, 1, 10, 0, 8, 1, 8, 7, 6, 1, 7, 10, 2, 3, 9];
    const newKindnesses = [0, 5, 9, 6, 10, 8, 8, 6, 9, 7, 10, 5, 5, 9, 5, 3];
    const newSociabilities = [5, 6, 6, 8, 5, 8, 8, 6, 7, 3, 4, 9, 4, 8, 3, 2];
    const newImages = [
      '../../../assets/characters/Sara.png',
      '../../../assets/characters/Keiji.png',
      '../../../assets/characters/Kanna.png',
      '../../../assets/characters/Q-Taro.png',
      '../../../assets/characters/Shin.png',
      '../../../assets/characters/Reko.png',
      '../../../assets/characters/Gin.png',
      '../../../assets/characters/Alice.png',
      '../../../assets/characters/Mishima.png',
      '../../../assets/characters/Ranmaru.png',
      '../../../assets/characters/Hinako.png',
      '../../../assets/characters/Mai.png',
      '../../../assets/characters/Naomichi.png',
      '../../../assets/characters/Anzu.png',
      '../../../assets/characters/Shunsuke.png',
      '../../../assets/characters/Megumi.png'
    ];

    this.sharedVariablesService.setNames(newNames);
    this.sharedVariablesService.setIQs(newIQs);
    this.sharedVariablesService.setStrengths(newStrengths);
    this.sharedVariablesService.setKindnesses(newKindnesses);
    this.sharedVariablesService.setSociabilities(newSociabilities);
    this.sharedVariablesService.setImages(newImages);
  }

  resetAll(): void {
    const newNames = [''];
    const newIQs = [5];
    const newStrengths = [5];
    const newKindnesses = [5];
    const newSociabilities = [5];
    const newImages = ['../../../assets/characters/Rei.png'];

    this.sharedVariablesService.setNames(newNames);
    this.sharedVariablesService.setIQs(newIQs);
    this.sharedVariablesService.setStrengths(newStrengths);
    this.sharedVariablesService.setKindnesses(newKindnesses);
    this.sharedVariablesService.setSociabilities(newSociabilities);
    this.sharedVariablesService.setImages(newImages);
  }

  trackByFn(index: any, item: any) {
    return index;  // or item.id if your items have a unique id
  }
}

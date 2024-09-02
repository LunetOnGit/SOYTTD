import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VariableService } from '../../../shared/variable.service';

@Component({
  selector: 'app-characters-creation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './characters-creation.component.html',
  styleUrls: ['./characters-creation.component.css']
})
export class CharactersCreationComponent {
  constructor(private variableService: VariableService) { }

  names: string[] = [];
  IQs: number[] =           [];
  strengths: number[] =     [];
  kindnesses: number[] =    [];
  sociabilities: number[] = [];
  images: string[] = [];
  charA: number[] = [];
  charB: number[] = [];
  percentages: number[] = [];
  defaultTrustLevel: number = 0;
  ownerLaptop: number;
  shouldEveryoneDieTie: boolean;
  canSacrWin: boolean;

  ngOnInit(): void {
    this.initializeValues();
    this.updateValue();
  }

  updateValue(): void {
    this.variableService.setVariable('names', this.names);
    this.variableService.setVariable('IQs', this.IQs);
    this.variableService.setVariable('strengths', this.strengths);
    this.variableService.setVariable('kindnesses', this.kindnesses);
    this.variableService.setVariable('sociabilities', this.sociabilities);
    this.variableService.setVariable('images', this.images);

    this.variableService.setVariable('characterA', this.charA);
    this.variableService.setVariable('characterB', this.charB);
    this.variableService.setVariable('charPercentages', this.percentages);
    this.variableService.setVariable('charDefaultTrustLevel', this.defaultTrustLevel);

    this.variableService.setVariable('ownerLaptop', this.ownerLaptop);
    this.variableService.setVariable('shouldEveryoneDieTie', this.shouldEveryoneDieTie);
    this.variableService.setVariable('canSacrWin', this.canSacrWin);
  }

  initializeValues(): void {
    this.names = this.variableService.getVariable('names') || [];
    this.IQs = this.variableService.getVariable('IQs') || [];
    this.strengths = this.variableService.getVariable('strengths') || [];
    this.kindnesses = this.variableService.getVariable('kindnesses') || [];
    this.sociabilities = this.variableService.getVariable('sociabilities') || [];
    this.images = this.variableService.getVariable('images') || [];

    this.charA = this.variableService.getVariable('characterA') || [];
    this.charB = this.variableService.getVariable('characterB') || [];
    this.percentages = this.variableService.getVariable('charPercentages') || [];
    this.defaultTrustLevel = this.variableService.getVariable('charDefaultTrustLevel') || [];

    this.ownerLaptop = this.variableService.getVariable('ownerLaptop') ?? -1;
    this.shouldEveryoneDieTie = this.variableService.getVariable('shouldEveryoneDieTie') ?? false;
    this.canSacrWin = this.variableService.getVariable('canSacrWin') ?? true;
  }

  // Method to upload variables from a JSON file
  uploadData(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target?.result as string;
        const parsedData = JSON.parse(fileContent);
  
        this.names = parsedData.names || [];
        this.IQs = parsedData.iqs || [];
        this.strengths = parsedData.strenghts  || [];
        this.sociabilities = parsedData.sociabilities || [];
        this.kindnesses = parsedData.kindnesses || [];
        this.images = parsedData.images || [];
  
        this.charA = parsedData.charA || [];
        this.charB = parsedData.charB || [];
        this.percentages = parsedData.charPerc   || [];
        this.defaultTrustLevel = parsedData.defaultTrustLevel   ?? 50;
  
        this.ownerLaptop = parsedData.ownerLaptop ?? -1;
        this.shouldEveryoneDieTie = parsedData.shouldEveryoneDieTie ?? false;
        this.canSacrWin = parsedData.canSacrWin ?? true;
  
        // Now that the data has been successfully loaded, update the service
        this.updateValue();
      };
      reader.readAsText(file);
    }
  }

  addCharacter() {
    this.names.push('');
    this.IQs.push(5);
    this.strengths.push(5);
    this.kindnesses.push(5);
    this.sociabilities.push(5);
    this.images.push('../../../assets/characters/Rei.png');
  }

  removeCharacter(index: number) {
    //update trust levels
    // Iterate from the last element to the first
    for (let i = this.charA.length - 1; i >= 0; i--) {
      if (this.charA[i] === index || this.charB[i] === index) {
          // Remove elements at index i
          this.charA.splice(i, 1);
          this.charB.splice(i, 1);
          this.percentages.splice(i, 1);
      } else {
          // Update elements if they are greater than index
          if (this.charA[i] > index) {
              this.charA[i]--;
          }
          if (this.charB[i] > index) {
              this.charB[i]--;
          }
      }
    }

    //update Kai's computer owner
    if (this.ownerLaptop === index) {
      this.ownerLaptop = -1
    }
    else {
      if (this.ownerLaptop > index) {
        this.ownerLaptop--;
      }
    }

    //remove character
    this.names.splice(index, 1);
    this.IQs.splice(index, 1);
    this.strengths.splice(index, 1);
    this.kindnesses.splice(index, 1);
    this.sociabilities.splice(index, 1);
    this.images.splice(index, 1);

    this.updateValue();
  }

  onImageChange(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.images[index] = e.target.result; // Update image URL after file is read
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  }

  getStatColor(value: number): string {
    if (value <= 3) {
      return 'red';
    } else if (value >= 7) {
      return 'green';
    } else {
      return 'orange'; // For values 4, 5, 6
    }
  }

  getStatWidth(value: number): number {
    if(value>10) {
      return 110
    }
    else if (value<0) {
      return 10
    }
    return 10 + (value * 10);
  }

  loadFirstPreset(): void {
    this.names = ['Sara', 'Joe', 'Keiji', 'Kanna', 'Q-Taro', 'Shin', 'Reko', 'Nao', 'Kai', 'Gin', 'Alice', 'Mishima', 'Ranmaru', 'Hinako', 'Mai', 'Naomichi', 'Anzu', 'Shunsuke', 'Kugie', 'Megumi']
    this.IQs = [7, 6, 8, 2, 5, 10, 6, 5, 9, 1, 4, 8, 6, 1, 4, 5, 3, 9, 7, 8];
    this.strengths = [9, 8, 10, 1, 10, 0, 8, 4, 9, 1, 8, 7, 6, 1, 7, 10, 2, 3, 5, 9];
    this.kindnesses = [7, 10, 5, 9, 6, 2, 8, 7, 9, 8, 6, 9, 7, 10, 5, 5, 9, 5, 8, 3];
    this.sociabilities = [7, 10, 6, 6, 8, 4, 8, 5, 6, 8, 6, 7, 3, 4, 9, 4, 8, 3, 5, 2];
    this.images = [
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
    this.charA =       [  0,   1,   8,    7,   11,    6,   10,    3,    18,    2,   19 ];
    this.charB =       [  1,   0,   0,   11,    7,   10,    6,   18,     3,   19,    2 ];
    this.percentages = [ 90,  90,  85,  100,  100,   60,   90,  100,    90,   15,   60 ];
    this.defaultTrustLevel = 50;
    this.ownerLaptop = 8;
    this.canSacrWin = true;
    this.shouldEveryoneDieTie = true;


    this.updateValue();
  }

  loadSecondPreset(): void {
    this.names = ['Sara', 'Keiji', 'Kanna', 'Q-Taro', 'Shin', 'Reko', 'Gin', 'Alice', 'Mishima', 'Ranmaru', 'Hinako', 'Mai', 'Naomichi', 'Anzu', 'Shunsuke', 'Megumi']
    this.IQs = [8, 8, 3, 4, 10, 6, 2, 5, 8, 6, 5, 6, 5, 4, 10, 9];
    this.strengths = [9, 10, 1, 10, 0, 8, 1, 8, 7, 6, 1, 7, 10, 2, 3, 9];
    this.kindnesses = [0, 5, 9, 6, 10, 8, 8, 6, 9, 7, 10, 5, 5, 9, 5, 3];
    this.sociabilities = [5, 6, 6, 8, 5, 8, 8, 6, 7, 3, 4, 9, 4, 8, 3, 2];
    this.images = [
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
    this.charA =       [  5,  7,  1, 15 ];
    this.charB =       [  7,  5, 15,  1 ];
    this.percentages = [ 60, 90, 15, 60 ];
    this.defaultTrustLevel = 50;
    this.ownerLaptop = -1;
    this.canSacrWin = true;
    this.shouldEveryoneDieTie = true;

    this.updateValue();
  }
  resetAll(): void {
    this.names = []
    this.IQs = [];
    this.strengths = [];
    this.kindnesses = [];
    this.sociabilities = [];
    this.images = [];
    this.charA =       [];
    this.charB =       [];
    this.percentages = [];
    this.defaultTrustLevel = 50;
    this.addCharacter()
    this.ownerLaptop = -1;
    this.canSacrWin = true;
    this.shouldEveryoneDieTie = true;


    this.updateValue();
  }

  trackByFn(index: any, item: any) {
    return index;  // or item.id if your items have a unique id
  }
}
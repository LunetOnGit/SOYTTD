import { Component } from '@angular/core';
import { VariableService } from '../../../shared/variable.service';

@Component({
  selector: 'app-saving-button',
  standalone: true,
  imports: [],
  templateUrl: './saving-button.component.html',
  styleUrl: './saving-button.component.css'
})
export class SavingButtonComponent {
  names: string[] = [];
  iqs: number[] = [];
  strenghts: number[] = [];
  sociabilities: number[] = [];
  kindnesses: number[] = [];
  images: string[] = [];

  charA: string[] = [];
  charB: string[] = [];
  charPerc: string[] = [];
  defaultTrustLevel: number = 50;

  ownerLaptop: number = -1;
  shouldEveryoneDieTie: boolean = false;
  canSacrWin: boolean = true;


  constructor(private variableService: VariableService) { }

  ngOnInit(): void {
    this.names = this.variableService.getVariable('names') || [];
    this.iqs = this.variableService.getVariable('IQs') || [];
    this.strenghts = this.variableService.getVariable('strengths') || [];
    this.sociabilities = this.variableService.getVariable('sociabilities') || [];
    this.kindnesses = this.variableService.getVariable('kindnesses') || [];
    this.images = this.variableService.getVariable('images') || [];

    this.charA = this.variableService.getVariable('characterA') || [];
    this.charB = this.variableService.getVariable('characterB') || [];
    this.charPerc = this.variableService.getVariable('charPercentages') || [];
    this.defaultTrustLevel = this.variableService.getVariable('charDefaultTrustLevel') ?? -1;

    this.ownerLaptop = this.variableService.getVariable('ownerLaptop') ?? -1;
    this.shouldEveryoneDieTie = this.variableService.getVariable('shouldEveryoneDieTie') ?? false;
    this.canSacrWin = this.variableService.getVariable('canSacrWin') ?? true;
  }

  // Method to download all variables as a JSON file
  downloadData(): void {
    const data = {
      names: this.names,
      iqs: this.iqs,
      strenghts: this.strenghts,
      sociabilities: this.sociabilities,
      kindnesses: this.kindnesses,
      images: this.images,
      charA: this.charA,
      charB: this.charB,
      charPerc: this.charPerc,
      defaultTrustLevel: this.defaultTrustLevel,
      ownerLaptop: this.ownerLaptop,
      shouldEveryoneDieTie: this.shouldEveryoneDieTie,
      canSacrWin: this.canSacrWin,
    };

    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'variables.json';
    a.click();
    window.URL.revokeObjectURL(url);
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
        this.iqs = parsedData.iqs || [];
        this.strenghts = parsedData.strenghts || [];
        this.sociabilities = parsedData.sociabilities || [];
        this.kindnesses = parsedData.kindnesses || [];
        this.images = parsedData.images || [];

        this.charA = parsedData.charA || [];
        this.charB = parsedData.charB || [];
        this.charPerc = parsedData.charPerc || [];
        this.defaultTrustLevel = parsedData.defaultTrustLevel ?? 50;

        this.ownerLaptop = parsedData.ownerLaptop ?? -1;
        this.shouldEveryoneDieTie = parsedData.shouldEveryoneDieTie ?? false;
        this.canSacrWin = parsedData.canSacrWin ?? true;
      };
      reader.readAsText(file);
    }
  }
}

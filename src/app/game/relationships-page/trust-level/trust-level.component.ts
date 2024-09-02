import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VariableService } from '../../../shared/variable.service';

@Component({
  selector: 'app-trust-level',
  templateUrl: './trust-level.component.html',
  styleUrls: ['./trust-level.component.css'],
  standalone:true,
  imports: [CommonModule, FormsModule]
})
export class TrustLevelComponent {
  constructor(private variableService: VariableService) { }

  names: string[] = [];
  images: string[] = [];
  charA: number[] = [];
  charB: number[] = [];
  percentages: number[] = [];
  defaultTrustLevel: number = 0;

  newCharA: string = '';
  newCharB: string = '';
  newPercentage: number | null = null;
  errorMessage: string = '';

  ngOnInit(): void {
    this.names = this.variableService.getVariable('names') || [];
    this.images = this.variableService.getVariable('images') || [];
    this.charA = this.variableService.getVariable('characterA') || [];
    this.charB = this.variableService.getVariable('characterB') || [];
    this.percentages = this.variableService.getVariable('charPercentages') || [];
    this.defaultTrustLevel = this.variableService.getVariable('charDefaultTrustLevel') || [];
  }

  updateDefaultTrustLevel(newValue: number): void {
    this.defaultTrustLevel = newValue;
    this.variableService.setVariable('charDefaultTrustLevel', newValue);
  }

  getStatusText(percentage: number): string {
    if (percentage >= 0 && percentage <= 20) {
      return '(Strong Distrust)';
    } else if (percentage >= 21 && percentage <= 40) {
      return '(Distrust)';
    } else if (percentage >= 41 && percentage <= 60) {
      return '(Neutral)';
    } else if (percentage >= 61 && percentage <= 80) {
      return '(Trust)';
    } else {
      return '(Strong Trust)';
    }
  }

  getStatusClass(percentage: number): string {
    if (percentage >= 0 && percentage <= 20) {
      return 'strong-distrust';
    } else if (percentage >= 21 && percentage <= 40) {
      return 'distrust';
    } else if (percentage >= 41 && percentage <= 60) {
      return 'neutral';
    } else if (percentage >= 61 && percentage <= 80) {
      return 'trust';
    } else {
      return 'strong-trust';
    }
  }

  deleteRelationship(index: number): void {
    this.charA.splice(index, 1);
    this.charB.splice(index, 1);
    this.percentages.splice(index, 1);
  }

  addRelationship(): void {
    const charAIndex = this.names.indexOf(this.newCharA);
    const charBIndex = this.names.indexOf(this.newCharB);

    if (charAIndex === -1 || charBIndex === -1) {
      this.errorMessage = "Please select valid characters for both fields.";
      return;
    }

    if (charAIndex === charBIndex) {
      this.errorMessage = "You can't add a relationship of someone with themselves";
      return;
    }

    const existingRelationshipIndex = this.charA.findIndex((a, index) => 
      a === charAIndex && this.charB[index] === charBIndex
    );

    if (existingRelationshipIndex !== -1) {
      this.errorMessage = "This relationship already exists";
      return;
    }

    if (this.newPercentage === null || this.newPercentage < 0 || this.newPercentage > 100) {
      this.errorMessage = "Please enter a valid percentage between 0 and 100";
      return;
    }

    this.charA.push(charAIndex);
    this.charB.push(charBIndex);
    this.percentages.push(this.newPercentage);
    this.errorMessage = '';
    this.newCharA = '';
    this.newCharB = '';
    this.newPercentage = null;
    this.updateRelationshipsInService();
  }

  private updateRelationshipsInService(): void {
    this.variableService.setVariable('characterA', this.charA);
    this.variableService.setVariable('characterB', this.charB);
    this.variableService.setVariable('charPercentages', this.percentages);
  }
}

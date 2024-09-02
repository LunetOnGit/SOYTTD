import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VariableService } from '../../../shared/variable.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  names: string[] = [];
  images: string[] = [];
  ownerLaptop: number = -1;
  shouldEveryoneDieTie: boolean = false;
  canSacrWin: boolean = true;

  constructor(private variableService: VariableService) { }

  ngOnInit(): void {
    this.names = this.variableService.getVariable('names') || [];
    this.images = this.variableService.getVariable('images') || [];
    this.ownerLaptop = this.variableService.getVariable('ownerLaptop') ?? -1;
    this.shouldEveryoneDieTie = this.variableService.getVariable('shouldEveryoneDieTie') ?? false;
    this.canSacrWin = this.variableService.getVariable('canSacrWin') ?? true;
  }

  onNameChange(event: any): void {
    this.ownerLaptop = parseInt(event.target.value, 10);
    this.variableService.setVariable('ownerLaptop', this.ownerLaptop);
  }

  onShouldEveryoneDieTieChange(): void {
    this.variableService.setVariable('shouldEveryoneDieTie', this.shouldEveryoneDieTie);
  }

  onCanSacrWinChange(): void {
    this.variableService.setVariable('canSacrWin', this.canSacrWin);
  }

  getOwnerImage(): string {
    return this.ownerLaptop >= 0 ? this.images[this.ownerLaptop] : '';
  }
}

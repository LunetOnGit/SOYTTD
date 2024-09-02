import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { VariableService } from '../../shared/variable.service';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css'],
})
export class GamePageComponent implements AfterViewInit, OnDestroy {

  

  scenes: string[] = [];
  dialogs: string[] = [];
  charAs: string[] = [];
  charBs: string[] = [];
  charCs: string[] = [];
  index = 0;

  isLoading = true;
  error = '';

  @ViewChild('innerBox') innerBox!: ElementRef<HTMLDivElement>;
  @ViewChild('backgroundImg') backgroundImg!: ElementRef<HTMLImageElement>;
  @ViewChild('textBox') textBox!: ElementRef<HTMLDivElement>;

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


  constructor(private variableService: VariableService, private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.adjustTextBoxWidth();
    window.addEventListener('resize', this.adjustTextBoxWidth.bind(this));

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

    this.loadGameData();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.adjustTextBoxWidth.bind(this));
  }

  loadGameData(): void {
    this.http.post('https://pihvfjerye.execute-api.eu-north-1.amazonaws.com/SOYTTD/process_lists', { names: this.names, images: this.images })
      .subscribe(
        (response: any) => {
          this.charAs = response.charA;
          this.charBs = response.charB;
          this.charCs = response.charC;
          this.scenes = response.scenes;
          this.dialogs = response.dialogs;
          this.isLoading = false;
        },
        (error) => {
          this.error = 'Failed to load game data. Please try again.';
          this.isLoading = false;
          console.error('Error loading game data:', error);
        }
      );
  }

  adjustTextBoxWidth(): void {
    if (this.backgroundImg && this.textBox) {
      const textBoxElement = this.textBox.nativeElement;
      const innerBoxElement = this.innerBox.nativeElement;

      textBoxElement.style.width = `${this.backgroundImg.nativeElement.offsetWidth}px`;
      innerBoxElement.style.width = `${textBoxElement.offsetWidth - 10}px`;
      innerBoxElement.style.height = `${textBoxElement.offsetHeight - 10}px`;
    }
  }

  @HostListener('document:keydown.space', ['$event'])
  onSpacePress(event: KeyboardEvent): void {
    this.onNext();
  }

  onNext(): void {
    this.index = (this.index + 1) % this.dialogs.length;
  }
}
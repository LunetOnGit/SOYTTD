// src/app/shared/variable.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariableService {
  private variables: { [key: string]: any } = {};

  constructor() {
    // Set initial values for variables here
    this.variables['names'] = ['Sara', 'Joe', 'Keiji', 'Kanna', 'Q-Taro', 'Shin', 'Reko', 'Nao', 'Kai', 'Gin', 'Alice', 'Mishima', 'Ranmaru', 'Hinako', 'Mai', 'Naomichi', 'Anzu', 'Shunsuke', 'Kugie', 'Megumi'];
    this.variables['IQs'] = [7, 6,  8,  2, 5,  10, 6, 5, 9, 1, 4, 8, 6, 1,  4,  5,  3, 9, 7, 8];
    this.variables['strengths'] = [9, 8,  10, 1, 10, 0,  8, 4, 9, 1, 8, 7, 6, 1,  7, 10,  2, 3, 5, 9];
    this.variables['kindnesses'] = [7, 10, 5,  9, 6,  2,  8, 7, 9, 8, 6, 9, 7, 10, 5,  5,  9, 5, 8, 3];
    this.variables['sociabilities'] = [7, 10, 6,  6, 8,  4,  8, 5, 6, 8, 6, 7, 3, 4,  9,  4,  8, 3, 5, 2];
    this.variables['images'] = [
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
      '../../../assets/characters/Megumi.png',
    ];
    this.variables['characterA'] =      [  0,   1,   8,    7,   11,    6,   10,    3,    18,    2,   19 ];
    this.variables['characterB'] =      [  1,   0,   0,   11,    7,   10,    6,   18,     3,   19,    2 ];
    this.variables['charPercentages'] = [ 90,  90,  85,  100,  100,   60,   90,  100,    90,   15,   60 ];
    
    this.variables['charDefaultTrustLevel'] = 50;

    this.variables['ownerLaptop'] = 8;
    this.variables['shouldEveryoneDieTie'] = true;
    this.variables['canSacrWin'] = true;
  }

  getVariable(key: string): any {
    return this.variables[key];
  }

  setVariable(key: string, value: any): void {
    this.variables[key] = value;
  }
}
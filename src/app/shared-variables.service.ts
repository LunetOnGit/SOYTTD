// src/app/shared-variables.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedVariablesService {
  private _names = new BehaviorSubject<string[]>(['Sara', 'Joe', 'Keiji', 'Kanna', 'Q-Taro', 'Shin', 'Reko', 'Nao', 'Kai', 'Gin', 'Alice', 'Mishima', 'Ranmaru', 'Hinako', 'Mai', 'Naomichi', 'Anzu', 'Shunsuke', 'Kugie', 'Megumi']);
  private _IQs = new BehaviorSubject<number[]>([7, 6, 8, 2, 5, 10, 6, 5, 9, 1, 4, 8, 6, 1, 4, 5, 3, 9, 7, 8]);
  private _strengths = new BehaviorSubject<number[]>([9, 8, 10, 1, 10, 0, 8, 4, 9, 1, 8, 7, 6, 1, 7, 10, 2, 3, 5, 9]);
  private _kindnesses = new BehaviorSubject<number[]>([7, 10, 5, 9, 6, 2, 8, 7, 9, 8, 6, 9, 7, 10, 5, 5, 9, 5, 8, 3]);
  private _sociabilities = new BehaviorSubject<number[]>([7, 10, 6, 6, 8, 4, 8, 5, 6, 8, 6, 7, 3, 4, 9, 4, 8, 3, 5, 2]);
  private _images = new BehaviorSubject<string[]>([
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
  ]);

  names$ = this._names.asObservable();
  IQs$ = this._IQs.asObservable();
  strengths$ = this._strengths.asObservable();
  kindnesses$ = this._kindnesses.asObservable();
  sociabilities$ = this._sociabilities.asObservable();
  images$ = this._images.asObservable();

  setNames(names: string[]) {
    this._names.next(names);
  }

  setIQs(IQs: number[]) {
    this._IQs.next(IQs);
  }

  setStrengths(strengths: number[]) {
    this._strengths.next(strengths);
  }

  setKindnesses(kindnesses: number[]) {
    this._kindnesses.next(kindnesses);
  }

  setSociabilities(sociabilities: number[]) {
    this._sociabilities.next(sociabilities);
  }

  setImages(images: string[]) {
    this._images.next(images);
  }
}
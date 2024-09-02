import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStatsRootComponent } from './game-stats-root.component';

describe('GameStatsRootComponent', () => {
  let component: GameStatsRootComponent;
  let fixture: ComponentFixture<GameStatsRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameStatsRootComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameStatsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

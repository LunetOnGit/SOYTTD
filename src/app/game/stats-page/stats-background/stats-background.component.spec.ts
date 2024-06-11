import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsBackgroundComponent } from './stats-background.component';

describe('StatsBackgroundComponent', () => {
  let component: StatsBackgroundComponent;
  let fixture: ComponentFixture<StatsBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatsBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

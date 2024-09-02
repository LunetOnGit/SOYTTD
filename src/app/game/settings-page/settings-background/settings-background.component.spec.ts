import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsBackgroundComponent } from './settings-background.component';

describe('StatsBackgroundComponent', () => {
  let component: SettingsBackgroundComponent;
  let fixture: ComponentFixture<SettingsBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingsBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

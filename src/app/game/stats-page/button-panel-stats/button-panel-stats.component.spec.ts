import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPanelStatsComponent } from './button-panel-stats.component';

describe('ButtonPanelStatsComponent', () => {
  let component: ButtonPanelStatsComponent;
  let fixture: ComponentFixture<ButtonPanelStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonPanelStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonPanelStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

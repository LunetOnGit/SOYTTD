import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPanelSettingsComponent } from './button-panel-settings.component';

describe('ButtonPanelSettingsComponent', () => {
  let component: ButtonPanelSettingsComponent;
  let fixture: ComponentFixture<ButtonPanelSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonPanelSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonPanelSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

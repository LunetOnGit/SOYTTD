import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPanelSavingComponent } from './button-panel-saving.component';

describe('ButtonPanelSettingsComponent', () => {
  let component: ButtonPanelSavingComponent;
  let fixture: ComponentFixture<ButtonPanelSavingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonPanelSavingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonPanelSavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

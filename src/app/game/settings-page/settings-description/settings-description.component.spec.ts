import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsDescriptionComponent } from './settings-description.component';

describe('RelationshipsDescriptionComponent', () => {
  let component: SettingsDescriptionComponent;
  let fixture: ComponentFixture<SettingsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

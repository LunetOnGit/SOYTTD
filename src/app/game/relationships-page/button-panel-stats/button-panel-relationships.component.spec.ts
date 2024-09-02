import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPanelRelationshipsComponent } from './button-panel-relationships.component';

describe('ButtonPanelStatsComponent', () => {
  let component: ButtonPanelRelationshipsComponent;
  let fixture: ComponentFixture<ButtonPanelRelationshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonPanelRelationshipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonPanelRelationshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

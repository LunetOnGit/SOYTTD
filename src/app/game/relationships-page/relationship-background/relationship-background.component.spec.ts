import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipBackgroundComponent } from './relationship-background.component';

describe('StatsBackgroundComponent', () => {
  let component: RelationshipBackgroundComponent;
  let fixture: ComponentFixture<RelationshipBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelationshipBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelationshipBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

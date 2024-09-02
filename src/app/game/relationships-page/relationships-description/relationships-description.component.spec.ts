import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipsDescriptionComponent } from './relationships-description.component';

describe('RelationshipsDescriptionComponent', () => {
  let component: RelationshipsDescriptionComponent;
  let fixture: ComponentFixture<RelationshipsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelationshipsDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelationshipsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

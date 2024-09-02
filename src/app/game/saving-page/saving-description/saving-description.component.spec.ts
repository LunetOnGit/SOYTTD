import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingDescriptionComponent } from './saving-description.component';

describe('RelationshipsDescriptionComponent', () => {
  let component: SavingDescriptionComponent;
  let fixture: ComponentFixture<SavingDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavingDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

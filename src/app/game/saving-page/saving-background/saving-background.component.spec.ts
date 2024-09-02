import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingBackgroundComponent } from './saving-background.component';

describe('StatsBackgroundComponent', () => {
  let component: SavingBackgroundComponent;
  let fixture: ComponentFixture<SavingBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavingBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

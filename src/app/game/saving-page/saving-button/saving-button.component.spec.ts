import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingButtonComponent } from './saving-button.component';

describe('SavingButtonComponent', () => {
  let component: SavingButtonComponent;
  let fixture: ComponentFixture<SavingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

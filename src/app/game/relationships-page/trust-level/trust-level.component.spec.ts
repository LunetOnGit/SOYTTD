import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustLevelComponent } from './trust-level.component';

describe('TrustLevelComponent', () => {
  let component: TrustLevelComponent;
  let fixture: ComponentFixture<TrustLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustLevelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrustLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

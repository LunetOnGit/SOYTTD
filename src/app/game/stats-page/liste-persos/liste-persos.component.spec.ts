import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePersosComponent } from './liste-persos.component';

describe('ListePersosComponent', () => {
  let component: ListePersosComponent;
  let fixture: ComponentFixture<ListePersosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListePersosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListePersosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

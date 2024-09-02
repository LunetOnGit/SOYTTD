import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersCreationComponent } from './characters-creation.component';

describe('CharactersCreationComponent', () => {
  let component: CharactersCreationComponent;
  let fixture: ComponentFixture<CharactersCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersCreationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharactersCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

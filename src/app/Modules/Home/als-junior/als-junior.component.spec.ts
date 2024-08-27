import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsJuniorComponent } from './als-junior.component';

describe('AlsJuniorComponent', () => {
  let component: AlsJuniorComponent;
  let fixture: ComponentFixture<AlsJuniorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlsJuniorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlsJuniorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

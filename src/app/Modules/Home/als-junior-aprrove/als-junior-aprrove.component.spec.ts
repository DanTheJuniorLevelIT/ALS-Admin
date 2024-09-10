import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsJuniorAprroveComponent } from './als-junior-aprrove.component';

describe('AlsJuniorAprroveComponent', () => {
  let component: AlsJuniorAprroveComponent;
  let fixture: ComponentFixture<AlsJuniorAprroveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlsJuniorAprroveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlsJuniorAprroveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

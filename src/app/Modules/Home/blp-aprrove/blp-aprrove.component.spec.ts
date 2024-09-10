import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlpAprroveComponent } from './blp-aprrove.component';

describe('BlpAprroveComponent', () => {
  let component: BlpAprroveComponent;
  let fixture: ComponentFixture<BlpAprroveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlpAprroveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlpAprroveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

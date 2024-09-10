import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveComponent } from './approve.component';

describe('ApproveComponent', () => {
  let component: ApproveComponent;
  let fixture: ComponentFixture<ApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignClassComponent } from './assign-class.component';

describe('AssignClassComponent', () => {
  let component: AssignClassComponent;
  let fixture: ComponentFixture<AssignClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

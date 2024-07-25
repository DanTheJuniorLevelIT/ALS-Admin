import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollStudentsComponent } from './enroll-students.component';

describe('EnrollStudentsComponent', () => {
  let component: EnrollStudentsComponent;
  let fixture: ComponentFixture<EnrollStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnrollStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

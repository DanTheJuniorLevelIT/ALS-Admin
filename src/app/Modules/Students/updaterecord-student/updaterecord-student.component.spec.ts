import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterecordStudentComponent } from './updaterecord-student.component';

describe('UpdaterecordStudentComponent', () => {
  let component: UpdaterecordStudentComponent;
  let fixture: ComponentFixture<UpdaterecordStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdaterecordStudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdaterecordStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

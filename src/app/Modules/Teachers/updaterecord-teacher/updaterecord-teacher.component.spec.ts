import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterecordTeacherComponent } from './updaterecord-teacher.component';

describe('UpdaterecordTeacherComponent', () => {
  let component: UpdaterecordTeacherComponent;
  let fixture: ComponentFixture<UpdaterecordTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdaterecordTeacherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdaterecordTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

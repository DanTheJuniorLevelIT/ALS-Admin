import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTeachersComponent } from './new-teachers.component';

describe('NewTeachersComponent', () => {
  let component: NewTeachersComponent;
  let fixture: ComponentFixture<NewTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTeachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

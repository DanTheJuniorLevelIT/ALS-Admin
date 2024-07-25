import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStudentsComponent } from './main-students.component';

describe('MainStudentsComponent', () => {
  let component: MainStudentsComponent;
  let fixture: ComponentFixture<MainStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTeachersComponent } from './main-teachers.component';

describe('MainTeachersComponent', () => {
  let component: MainTeachersComponent;
  let fixture: ComponentFixture<MainTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainTeachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

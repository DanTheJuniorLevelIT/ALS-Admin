import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainClassComponent } from './main-class.component';

describe('MainClassComponent', () => {
  let component: MainClassComponent;
  let fixture: ComponentFixture<MainClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

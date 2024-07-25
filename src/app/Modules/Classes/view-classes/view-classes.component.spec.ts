import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClassesComponent } from './view-classes.component';

describe('ViewClassesComponent', () => {
  let component: ViewClassesComponent;
  let fixture: ComponentFixture<ViewClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewClassesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

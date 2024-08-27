import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlpComponent } from './blp.component';

describe('BlpComponent', () => {
  let component: BlpComponent;
  let fixture: ComponentFixture<BlpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

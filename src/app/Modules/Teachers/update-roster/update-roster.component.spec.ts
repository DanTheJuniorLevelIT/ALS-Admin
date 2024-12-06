import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRosterComponent } from './update-roster.component';

describe('UpdateRosterComponent', () => {
  let component: UpdateRosterComponent;
  let fixture: ComponentFixture<UpdateRosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateRosterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

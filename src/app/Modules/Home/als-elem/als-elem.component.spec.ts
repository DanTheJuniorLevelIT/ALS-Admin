import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsElemComponent } from './als-elem.component';

describe('AlsElemComponent', () => {
  let component: AlsElemComponent;
  let fixture: ComponentFixture<AlsElemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlsElemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlsElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

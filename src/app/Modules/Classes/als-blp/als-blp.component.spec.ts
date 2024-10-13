import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsBlpComponent } from './als-blp.component';

describe('AlsBlpComponent', () => {
  let component: AlsBlpComponent;
  let fixture: ComponentFixture<AlsBlpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlsBlpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlsBlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

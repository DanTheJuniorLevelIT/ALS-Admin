import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsblpComponent } from './alsblp.component';

describe('AlsblpComponent', () => {
  let component: AlsblpComponent;
  let fixture: ComponentFixture<AlsblpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlsblpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlsblpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

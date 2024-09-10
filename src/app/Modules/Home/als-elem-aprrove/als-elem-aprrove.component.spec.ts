import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsElemAprroveComponent } from './als-elem-aprrove.component';

describe('AlsElemAprroveComponent', () => {
  let component: AlsElemAprroveComponent;
  let fixture: ComponentFixture<AlsElemAprroveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlsElemAprroveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlsElemAprroveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

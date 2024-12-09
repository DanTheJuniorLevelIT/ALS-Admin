import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainReportsComponent } from './main-reports.component';

describe('MainReportsComponent', () => {
  let component: MainReportsComponent;
  let fixture: ComponentFixture<MainReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

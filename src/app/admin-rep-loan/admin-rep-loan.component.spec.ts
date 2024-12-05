import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRepLoanComponent } from './admin-rep-loan.component';

describe('AdminRepLoanComponent', () => {
  let component: AdminRepLoanComponent;
  let fixture: ComponentFixture<AdminRepLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRepLoanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminRepLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

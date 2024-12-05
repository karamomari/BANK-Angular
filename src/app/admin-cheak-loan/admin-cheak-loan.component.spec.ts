import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCheakLoanComponent } from './admin-cheak-loan.component';

describe('AdminCheakLoanComponent', () => {
  let component: AdminCheakLoanComponent;
  let fixture: ComponentFixture<AdminCheakLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCheakLoanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCheakLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

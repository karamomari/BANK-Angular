import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOneLoanComponent } from './admin-one-loan.component';

describe('AdminOneLoanComponent', () => {
  let component: AdminOneLoanComponent;
  let fixture: ComponentFixture<AdminOneLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminOneLoanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminOneLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

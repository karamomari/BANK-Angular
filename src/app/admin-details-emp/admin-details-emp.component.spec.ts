import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailsEmpComponent } from './admin-details-emp.component';

describe('AdminDetailsEmpComponent', () => {
  let component: AdminDetailsEmpComponent;
  let fixture: ComponentFixture<AdminDetailsEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDetailsEmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDetailsEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

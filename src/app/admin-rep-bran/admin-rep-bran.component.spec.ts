import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRepBranComponent } from './admin-rep-bran.component';

describe('AdminRepBranComponent', () => {
  let component: AdminRepBranComponent;
  let fixture: ComponentFixture<AdminRepBranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRepBranComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminRepBranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

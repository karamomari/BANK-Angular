import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOtherEmpComponent } from './home-other-emp.component';

describe('HomeOtherEmpComponent', () => {
  let component: HomeOtherEmpComponent;
  let fixture: ComponentFixture<HomeOtherEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeOtherEmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeOtherEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

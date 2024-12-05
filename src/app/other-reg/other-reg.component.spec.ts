import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherRegComponent } from './other-reg.component';

describe('OtherRegComponent', () => {
  let component: OtherRegComponent;
  let fixture: ComponentFixture<OtherRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherRegComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtherRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

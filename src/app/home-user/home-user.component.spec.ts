import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUserComponent } from './home-user.component';
import { beforeEach, describe, it } from 'node:test';

describe('HomeUserComponent', () => {
  let component: HomeUserComponent;
  let fixture: ComponentFixture<HomeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function expect(component: HomeUserComponent) {
  throw new Error('Function not implemented.');
}


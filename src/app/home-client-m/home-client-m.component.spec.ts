import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClientMComponent } from './home-client-m.component';

describe('HomeClientMComponent', () => {
  let component: HomeClientMComponent;
  let fixture: ComponentFixture<HomeClientMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeClientMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeClientMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

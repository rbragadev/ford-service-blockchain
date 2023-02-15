import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCarListComponent } from './client-car-list.component';

describe('ClientCarListComponent', () => {
  let component: ClientCarListComponent;
  let fixture: ComponentFixture<ClientCarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCarListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientCarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

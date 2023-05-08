import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatefactComponent } from './createfact.component';

describe('CreatefactComponent', () => {
  let component: CreatefactComponent;
  let fixture: ComponentFixture<CreatefactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatefactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatefactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

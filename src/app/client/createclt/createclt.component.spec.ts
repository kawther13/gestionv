import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecltComponent } from './createclt.component';

describe('CreatecltComponent', () => {
  let component: CreatecltComponent;
  let fixture: ComponentFixture<CreatecltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

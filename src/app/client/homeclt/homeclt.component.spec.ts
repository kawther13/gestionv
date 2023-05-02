import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecltComponent } from './homeclt.component';

describe('HomecltComponent', () => {
  let component: HomecltComponent;
  let fixture: ComponentFixture<HomecltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomecltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomecltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

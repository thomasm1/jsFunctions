import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraymakerComponent } from './arraymaker.component';

describe('ArraymakerComponent', () => {
  let component: ArraymakerComponent;
  let fixture: ComponentFixture<ArraymakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArraymakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraymakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

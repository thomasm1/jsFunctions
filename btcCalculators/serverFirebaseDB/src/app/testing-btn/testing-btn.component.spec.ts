import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { TestingBtnComponent } from './testing-btn.component';

describe('TestingBtnComponent', () => {
  let component: TestingBtnComponent;
  let fixture: ComponentFixture<TestingBtnComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingBtnComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should have a message with `tested!`', () => {
  //   expect(component.content).toContain('tested!');
  // });
});

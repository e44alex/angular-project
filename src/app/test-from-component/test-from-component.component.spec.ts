import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFromComponentComponent } from './test-from-component.component';

describe('TestFromComponentComponent', () => {
  let component: TestFromComponentComponent;
  let fixture: ComponentFixture<TestFromComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFromComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFromComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

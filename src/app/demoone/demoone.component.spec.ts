import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemooneComponent } from './demoone.component';

describe('DemooneComponent', () => {
  let component: DemooneComponent;
  let fixture: ComponentFixture<DemooneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemooneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemooneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

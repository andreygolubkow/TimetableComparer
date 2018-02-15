import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainViewComponent } from './app-main-view.component';

describe('AppMainViewComponent', () => {
  let component: AppMainViewComponent;
  let fixture: ComponentFixture<AppMainViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMainViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

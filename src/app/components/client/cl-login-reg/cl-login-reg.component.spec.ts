import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClLoginRegComponent } from './cl-login-reg.component';

describe('ClLoginRegComponent', () => {
  let component: ClLoginRegComponent;
  let fixture: ComponentFixture<ClLoginRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClLoginRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClLoginRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

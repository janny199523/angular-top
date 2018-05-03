import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClWalletComponent } from './cl-wallet.component';

describe('ClWalletComponent', () => {
  let component: ClWalletComponent;
  let fixture: ComponentFixture<ClWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

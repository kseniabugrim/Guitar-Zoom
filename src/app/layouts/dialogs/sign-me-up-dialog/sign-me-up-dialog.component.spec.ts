import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignMeUpDialogComponent } from './sign-me-up-dialog.component';

describe('SignInDialogComponent', () => {
  let component: SignMeUpDialogComponent;
  let fixture: ComponentFixture<SignMeUpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignMeUpDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignMeUpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBrowsingComponent } from './profile-browsing.component';

describe('ProfileBrowsingComponent', () => {
  let component: ProfileBrowsingComponent;
  let fixture: ComponentFixture<ProfileBrowsingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileBrowsingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBrowsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidecontainerComponent } from './sidecontainer.component';

describe('SidecontainerComponent', () => {
  let component: SidecontainerComponent;
  let fixture: ComponentFixture<SidecontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidecontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

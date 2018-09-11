import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PawParalaxComponent } from './paw-paralax.component';

describe('PawParalaxComponent', () => {
  let component: PawParalaxComponent;
  let fixture: ComponentFixture<PawParalaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PawParalaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PawParalaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

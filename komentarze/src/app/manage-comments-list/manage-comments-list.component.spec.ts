import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCommentsListComponent } from './manage-comments-list.component';

describe('ManageCommentsListComponent', () => {
  let component: ManageCommentsListComponent;
  let fixture: ComponentFixture<ManageCommentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCommentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCommentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

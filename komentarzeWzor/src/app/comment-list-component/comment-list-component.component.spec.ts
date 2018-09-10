import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentListComponentComponent } from './comment-list-component.component';

describe('CommentListComponentComponent', () => {
  let component: CommentListComponentComponent;
  let fixture: ComponentFixture<CommentListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

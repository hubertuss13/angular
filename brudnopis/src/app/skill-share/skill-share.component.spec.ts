import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillShareComponent } from './skill-share.component';

describe('SkillShareComponent', () => {
  let component: SkillShareComponent;
  let fixture: ComponentFixture<SkillShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

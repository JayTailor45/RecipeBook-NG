import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostControllerComponent } from './post-controller.component';

describe('PostControllerComponent', () => {
  let component: PostControllerComponent;
  let fixture: ComponentFixture<PostControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

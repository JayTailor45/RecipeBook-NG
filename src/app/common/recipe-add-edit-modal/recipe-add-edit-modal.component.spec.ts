import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeAddEditModalComponent } from './recipe-add-edit-modal.component';

describe('RecipeAddEditModalComponent', () => {
  let component: RecipeAddEditModalComponent;
  let fixture: ComponentFixture<RecipeAddEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeAddEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeAddEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

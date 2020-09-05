import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionCommentComponent } from './production-comment.component';

describe('ProductionCommentComponent', () => {
  let component: ProductionCommentComponent;
  let fixture: ComponentFixture<ProductionCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

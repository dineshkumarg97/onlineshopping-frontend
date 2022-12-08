import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowproductImagesDialogComponent } from './showproduct-images-dialog.component';

describe('ShowproductImagesDialogComponent', () => {
  let component: ShowproductImagesDialogComponent;
  let fixture: ComponentFixture<ShowproductImagesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowproductImagesDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowproductImagesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, Inject, OnInit } from '@angular/core';
//import { MatDialog } from '@angular/material/dialog';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FileHandle } from '../_model/file-handle.model';

@Component({
  selector: 'app-showproduct-images-dialog',
  templateUrl: './showproduct-images-dialog.component.html',
  styleUrls: ['./showproduct-images-dialog.component.css']
})
export class ShowproductImagesDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.receiveImages();
  }
receiveImages(){
  console.log(this.data);
}
}

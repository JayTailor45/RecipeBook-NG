import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ImageCroppedEvent } from 'ngx-image-cropper';
@Component({
  selector: "app-recipe-add-edit-modal",
  templateUrl: "./recipe-add-edit-modal.component.html",
  styleUrls: ["./recipe-add-edit-modal.component.scss"]
})
export class RecipeAddEditModalComponent implements OnInit {
  @Input() obj;
  step = 0;
  markdown = "";
  imageChangedEvent: any = "";
  croppedImage: any = "";

  constructor(public modal: NgbActiveModal) {}

  ngOnInit() {}

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}

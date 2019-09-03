import { OnInit, Input, ViewChild, ElementRef, Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ImageCroppedEvent } from "ngx-image-cropper";
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent
} from "@angular/material/autocomplete";
import { ENTER, COMMA } from "@angular/cdk/keycodes";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { startWith, map, tap } from "rxjs/operators";
import { MatChipInputEvent } from "@angular/material/chips";

@Component({
  selector: "app-recipe-add-edit-modal",
  templateUrl: "./recipe-add-edit-modal.component.html",
  styleUrls: ["./recipe-add-edit-modal.component.scss"]
})
export class RecipeAddEditModalComponent implements OnInit {
  @Input() obj;

  @ViewChild("chipInput", { static: false }) chipInput: ElementRef<
    HTMLInputElement
  >;
  @ViewChild("autoTags", { static: false }) matAutoTagscomplete: MatAutocomplete;

  step = 0;
  markdown = "";
  imageChangedEvent: any = "";
  croppedImage: any = "";

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  filteredTags: Observable<string[]>;
  tags: string[] = ["Lemon"];
  allTags: string[] = ["Apple", "Lemon", "Lime", "Orange", "Strawberry"];

  constructor(public modal: NgbActiveModal) {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) =>
        tag ? this._filter(tag) : this.allTags.slice()
      )
    );
  }

  ngOnInit() {}

  /*
   *
   * Image cropper
   *
   */
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

  /*
   *
   * Expansion Panel
   *
   */
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  /*
   *
   * Tag cips
   *
   */
  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutoTagscomplete.isOpen) {
      const input = event.input;
      const tag = event.value;
      // Add our tag
      if ((tag || "").trim()) {
        this.tags.push(tag.trim());
      }
      if (input) {
        input.value = "";
      }
      this.tagCtrl.setValue(null);
    }
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.chipInput.nativeElement.value = "";
    this.tagCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allTags.filter(
      tag => tag.toLowerCase().indexOf(filterValue) === 0
    );
  }
}

import { OnInit, Input, ViewChild, ElementRef, Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ImageCroppedEvent } from "ngx-image-cropper";
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent
} from "@angular/material/autocomplete";
import { ENTER, COMMA } from "@angular/cdk/keycodes";
import { FormControl } from "@angular/forms";
import { Observable, Subject } from "rxjs";
import { startWith, map, tap } from "rxjs/operators";
import { MatChipInputEvent } from "@angular/material/chips";
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: "app-recipe-add-edit-modal",
  templateUrl: "./recipe-add-edit-modal.component.html",
  styleUrls: ["./recipe-add-edit-modal.component.scss"]
})
export class RecipeAddEditModalComponent implements OnInit {
  @Input() obj;
  
  // for Images
  step = 0;
  markdown = "";
  imageChangedEvent: any = "";
  croppedImage: any = "";

  objToSend = {
    author: '',
    name: '',
    description: '',
    image: null,
    categories: [],
    tags: []
  };
  
  // for Tags
  @ViewChild("tagChipInput", { static: false }) chipInput: ElementRef<
    HTMLInputElement
  >;
  @ViewChild("autoTags", { static: false }) matAutoTagscomplete: MatAutocomplete;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  filteredTags: Observable<string[]>;
  tags: string[] = ["Lemon"];
  allTags: string[] = ["Apple", "Lemon", "Lime", "Orange", "Strawberry"];

  // for Categories
  @ViewChild("catChipInput", { static: false }) catInput: ElementRef<
    HTMLInputElement
  >;
  @ViewChild("autoCats", { static: false }) matAutoCatscomplete: MatAutocomplete;

  catCtrl = new FormControl();
  filteredCats: Observable<string[]>;
  cats: string[] = ["Lemon"];
  allCats: string[] = ["Apple", "Lemon", "Lime", "Orange", "Strawberry"];

  constructor(public modal: NgbActiveModal, private RecipeService: RecipeService) {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) =>
        tag ? this._filter(tag) : this.allTags.slice()
      )
    );

    this.filteredCats = this.catCtrl.valueChanges.pipe(
      startWith(null),
      map((cat: string | null) =>
        cat ? this._cat_filter(cat) : this.allCats.slice()
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
    this.objToSend.image = event.file;
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
    if (!this.matAutoTagscomplete.isOpen) {
      const input = event.input;
      const tag = event.value;
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

  /*
   *
   * Categories cips
   *
   */
  catAdd(event: MatChipInputEvent): void {
    if (!this.matAutoCatscomplete.isOpen) {
      const input = event.input;
      const cat = event.value;
      if ((cat || "").trim()) {
        this.cats.push(cat.trim());
      }
      if (input) {
        input.value = "";
      }
      this.catCtrl.setValue(null);
    }
  }

  catRemove(cat: string): void {
    const index = this.cats.indexOf(cat);
    if (index >= 0) {
      this.cats.splice(index, 1);
    }
  }

  catSelected(event: MatAutocompleteSelectedEvent): void {
    this.cats.push(event.option.viewValue);
    this.catInput.nativeElement.value = "";
    this.catCtrl.setValue(null);
  }

  private _cat_filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allCats.filter(
      cat => cat.toLowerCase().indexOf(filterValue) === 0
    );
  }
  
  submitRecipe() {
    // Set remaining fields
    this.objToSend.description = this.markdown;
    this.objToSend.tags = this.tags;
    this.objToSend.categories = this.cats;

    this.RecipeService.addRecipe(this.objToSend);    
  }
}

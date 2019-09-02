import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-recipe-add-edit-modal',
  templateUrl: './recipe-add-edit-modal.component.html',
  styleUrls: ['./recipe-add-edit-modal.component.scss']
})
export class RecipeAddEditModalComponent implements OnInit {
  @Input() obj;
  step = 0;
  constructor(public modal: NgbActiveModal) { }

  ngOnInit() {
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

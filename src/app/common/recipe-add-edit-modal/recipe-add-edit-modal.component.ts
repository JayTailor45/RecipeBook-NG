import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-recipe-add-edit-modal',
  templateUrl: './recipe-add-edit-modal.component.html',
  styleUrls: ['./recipe-add-edit-modal.component.scss']
})
export class RecipeAddEditModalComponent implements OnInit {
  @Input() obj;
  constructor(public modal: NgbActiveModal) { }

  ngOnInit() {
  }

}

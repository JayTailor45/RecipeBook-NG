import { Component, OnInit } from "@angular/core";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { AuthService } from 'src/app/services/auth.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecipeAddEditModalComponent } from '../recipe-add-edit-modal/recipe-add-edit-modal.component';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private iconLib: FaIconLibrary, private authService: AuthService, public modal: NgbModal) {
    this.iconLib.addIcons(faCookieBite);
  }

  ngOnInit() {}

  open() {
    const modalRef = this.modal.open(RecipeAddEditModalComponent, { size: 'lg', scrollable: true /*, centered: true */ });
    modalRef.componentInstance.name = {};
  }

}

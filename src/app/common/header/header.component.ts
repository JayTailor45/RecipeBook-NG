import { Component, OnInit } from "@angular/core";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private iconLib: FaIconLibrary, private authService: AuthService) {
    this.iconLib.addIcons(faCookieBite);
  }

  ngOnInit() {}
}

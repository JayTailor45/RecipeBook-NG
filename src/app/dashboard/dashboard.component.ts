import { Component, OnInit } from "@angular/core";
import { DashboardService } from "../services/dashboard.service";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      )
    ])
  ]
})
export class DashboardComponent implements OnInit {
  dataSource = [];
  columnsToDisplay = ["name", "description", "categories", "tags"];
  expandedElement: any | null;

  constructor(private DashboardService: DashboardService) {
    this.DashboardService.recipes.subscribe(x => {
      for (let el = 0; el < x.length; el++) {
        if (x[el].description) {
          const newVal = x[el].description.replace(/[^\w\s]/gi, "").trim();
          x[el].description = newVal.charAt(0).toUpperCase() + newVal.slice(1);
        }
        if (x[el]) {
          x[el].actions = x[el].id; 
        }
      }
      this.dataSource = x;
    });
  }

  ngOnInit() {}
}

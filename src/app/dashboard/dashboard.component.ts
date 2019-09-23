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
      this.dataSource = x;
    });
  }

  ngOnInit() {}
}

import { Component, OnInit, Input, AfterContentInit } from "@angular/core";
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: "app-post-controller",
  templateUrl: "./post-controller.component.html",
  styleUrls: ["./post-controller.component.scss"]
})
export class PostControllerComponent implements OnInit, AfterContentInit {
  @Input("postId") postId;
  @Input("status") status;

  selectedStatus: any;

  blogStatus = [
    { value: "DRAFT", viewValue: "DRAFT" },
    { value: "UNPUBLISHED", viewValue: "UNPUBLISHED" },
    { value: "PUBLISHED", viewValue: "PUBLISHED" }
  ];

  ngAfterContentInit() {
    if (this.status) {
      this.selectedStatus = this.status;
    }
  }

  constructor(private DashboardService: DashboardService) {}

  ngOnInit() {}

  updatePostStatus(event) {
    console.log(event);
    this.DashboardService.updatePostStatus(this.postId, event);
  }
}

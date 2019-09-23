import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private DashboardService: DashboardService) {
    this.DashboardService.recipes.subscribe(x => {
      console.log(x);
    })
   }

  ngOnInit() {
  }

}

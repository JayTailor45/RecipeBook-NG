import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from "../services/recipe.service";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.scss"]
})
export class RecipeComponent implements OnInit {
  data: any;
  loading: boolean;
  constructor(
    private route: ActivatedRoute,
    private RecipeService: RecipeService
  ) {
    this.loading = true;
    this.route.params.subscribe(param => {
      this.RecipeService.getRecipe(param["id"]).subscribe(x => {
        this.data = x.data();
        this.loading = false;
      });
    });
  }

  ngOnInit() {
  }

}

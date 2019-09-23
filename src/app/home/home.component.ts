import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recipes: any;

  constructor(private RecipeService: RecipeService) { 
    this.recipes = this.RecipeService.getTwoRecipes().valueChanges()
  }

  ngOnInit() {
  }

}

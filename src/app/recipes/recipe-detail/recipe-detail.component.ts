import { Component, OnInit} from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable} from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Observable<Recipe>;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipe = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.recipeService.getRecipe(params.get('id')))
    );
  }

  // onAddToShoppingList() {
  //   this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  // }

}

import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/recipes",
    pathMatch: 'full'
    
  },
  {
    path: "recipes",
    component: RecipesComponent
  },
  {
    path: "shoping-list",
    component: ShoppingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

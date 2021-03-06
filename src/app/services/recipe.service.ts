import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { finalize } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  public recipes: Observable<any[]>;
  constructor(
    private db: AngularFirestore,
    private AuthService: AuthService,
    private storage: AngularFireStorage
  ) {
    this.recipes = this.db
      .collection("recipes")
      .valueChanges({ idField: "id" });
  }

  addRecipe(recipe) {
    recipe.author = this.AuthService.getCurrentUser();
    const uniqueImageName = new Date().getTime().toString();
    const storegeRef = this.storage.ref("/images/recipe_" + uniqueImageName);
    const task = storegeRef.put(recipe.image, { contentType: "image/png" });

    task
      .then(() => {
        storegeRef.getDownloadURL().subscribe(gotName => {
          recipe.image = gotName;
          this.db
            .collection("recipes")
            .add(recipe)
            .then(() => {})
            .catch(e => {
              console.log(e.message);
            });
        });
      })
      .catch(e => {
        console.log(e.message);
      });
  }

  getRecipe(id) {
    const ref = this.db.collection("recipes").doc(id);
    return ref.get();
  }
}

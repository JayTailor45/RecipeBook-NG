import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";
import { AuthService } from "./auth.service";
import { AngularFireStorage } from "@angular/fire/storage";

@Injectable({
  providedIn: "root"
})
export class DashboardService {
  public recipes: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.recipes = this.db
      .collection("recipes")
      .valueChanges({ idField: "id" });
  }

  updatePostStatus(id, status) {
    this.db.collection('recipes').doc(id).update({status: status})
      .then(res => console.log(res))
      .catch(e => console.log(e))
  }
}

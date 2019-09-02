import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
    

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        }
        else {
          this.userDetails = null;
        }
      }
    );
  }

  login(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email + '@gmail.com', password)
    .then(result => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  logout() {
    this.afAuth.auth.signOut().then((res) => this.router.navigate(['/']));
  }

  isLoggedIn() {
    if (this.userDetails == null ) {
        return false;
      } else {
        return true;
      }
    }
  
}

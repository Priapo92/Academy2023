import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isLogged = false;

  loginEmail = "";
  loginPassword = "";

  constructor(
    private router: Router,
    private servizio: CommonService
  ) {

  }

  login() {
    console.log("DATI UTENTE " + this.loginEmail + " Password: " + this.loginPassword);
    this.servizio.getUsers().subscribe((utenti: any[]) => {
      const utente = utenti.filter(utente => {
        if (utente.email == this.loginEmail && utente.password == this.loginPassword) {
          return true;
        }
        return false;
      });
      if (utente.length > 0) {
        // utente loggato
        this.isLogged = true;
        document.getElementById('modale_login_chiudi')?.click();
        this.router.navigate(['/regione', utente[0].regione]);
      } else {
        // errore nella login
        alert("ERRORE: utente o password errati");
      }

    })
  }

  dataSave() {
    sessionStorage.setItem(this.loginEmail = "", this.loginPassword = "");
  }

}

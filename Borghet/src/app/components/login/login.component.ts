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
  user: any = {};


  // variabili dell'istanza del componente che sono collegati con gli input del form
  loginEmail = "";
  loginPassword = "";

  constructor(
    private router: Router,
    private servizio: CommonService
  ) {
    // sto effettuando una sottoscrizione per restare aggiornato sui cambiamenti del
    // BeheviorSubject isLogged definito nel servizio
    this.servizio.isLogged.subscribe((loggato) => {
      console.log("AGGIORNAMENTO SULLA LOGIN: ", loggato)
      // se ho degli aggiormenti cambio il valore della variabile locale del componente
      this.isLogged = loggato;
    })

    this.servizio.utenteLoggato.subscribe((utente: any) => {
      this.user = utente;
    })
  }

  /**
   * Vecchio metodo che effettua la login salvando solo il parametro nell'istanza del componente
   */
  loginOld() {
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

  /**
   * Metodo del login che utilizza il service per gestire lo stato di loggato
   */
  login() {
    console.log("DATI UTENTE " + this.loginEmail + " Password: " + this.loginPassword);
    // invoco il metodo di login sul service
    this.servizio.login({
      email: this.loginEmail,
      password: this.loginPassword
    }).subscribe((utente) => { // mi metto in attesa di una risposta
      if (utente) {
        document.getElementById('modale_login_chiudi')?.click();
        // se corretta effettuo il navigate sulla pagina di regione definita dall'utente
        this.router.navigate(['/regione', utente.regione]);
      } else {
        // errore nella login
        alert("ERRORE: utente o password errati");
      }

    })
  }

  dataSave() {
    sessionStorage.setItem(this.loginEmail = "", this.loginPassword = "");
  }

  logOut() {

    this.servizio.logOut().subscribe(() => {
      this.router.navigate(['/dashboard',]);
    })
  }

}

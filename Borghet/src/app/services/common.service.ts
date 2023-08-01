import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  isLogged = new BehaviorSubject(false);

  // Restituisce le regioni//
  getAllRegions(): Observable<any[]> {
    const url = 'api/regions';
    return this.http.get<any[]>(url)
  }

  getProdotto(id: string): Observable<any> {
    const url = 'api/products/' + id;
    return this.http.get<any>(url)
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>('/api/users')
  }

  /**
   * metodo per effettuare la login riceve come input le credenziali
   * Nel componente indico cosa devo fare in questo metodo del service 
   * verifico i dati trasmessi
   * @param credenziali 
   */
  login(credenziali: { email: string, password: string }): Observable<any> {
    // restituisco il risultato della chiamata al servizio effettuando una concatenazione di elaborazioni (pipe) 
    // in questo caso ci serve solo una mappatura e utilizziamo l'operatore rxjs map per rimappare i dati 
    return this.http.get<any[]>('/api/users').pipe(map((utenti: any[]) => {
      // dichiaro una costante locale per verificare che l'utente sia nella lista
      const utente = utenti.find(utente => utente.email == credenziali.email && utente.password == credenziali.password);
      // verifico lo stato della login, se l'utente è stato trovato la imposto a true, altrimenti false
      this.isLogged.next(utente ? true : false);
      // restituisco l'utente
      return utente;
    }))
  }

}

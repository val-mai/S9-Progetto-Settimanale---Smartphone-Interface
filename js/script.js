"use strict";
let phoneBody = document.querySelector('.phoneBody');
class User {
    constructor(carica, numeroChiamate, durataTotale) {
        this.carica = carica,
            this.numeroChiamate = numeroChiamate;
        this.durataTotale = durataTotale;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(durata) {
        this.carica -= (Math.ceil(durata / 60) * 0.2); //tariffa di 20 cent al minuto
        this.numeroChiamate++;
        this.durataTotale += durata;
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    getDurataTotale() {
        let totale = this.durataTotale;
        let minuti = Math.floor(totale / 60);
        let secondi = totale % 60;
        return `${minuti} m ${secondi} s`;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
;
let user1 = new User(15, 0, 0);
let user2 = new User(10, 0, 0);
let user3 = new User(20, 0, 0);
let p = document.querySelector('.info1 p');
p.innerHTML = `${user1.numero404()}€`;
let p2 = document.querySelector('.info2 p');
p2.innerHTML = `${user1.getNumeroChiamate()}`;

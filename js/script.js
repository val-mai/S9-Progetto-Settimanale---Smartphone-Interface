"use strict";
let phoneBody = document.querySelector('.phoneBody');
changeUser();
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
        this.durataTotale = 0;
    }
}
;
let user1 = new User(15, 0, 0);
let user2 = new User(10, 0, 0);
let user3 = new User(20, 0, 0);
let utenti = [user1, user2, user3];
let i;
i = 0;
function initialize() {
    phoneBody.innerHTML = '';
    let info1 = document.createElement('div');
    info1.classList.add('info1');
    let h2 = document.createElement('h2');
    h2.innerHTML = 'Credito residuo';
    let credito = document.createElement('p');
    credito.innerHTML = `${utenti[i].numero404().toFixed(2)}`;
    let info2 = document.createElement('div');
    info2.classList.add('info2');
    let h4_1 = document.createElement('h4');
    h4_1.innerHTML = 'Chiamate effettuate';
    let chiamate = document.createElement('p');
    chiamate.innerHTML = `${utenti[i].getNumeroChiamate()}`;
    let h4_2 = document.createElement('h4');
    h4_2.innerHTML = 'Durata totale delle chiamate';
    let durataTot = document.createElement('p');
    durataTot.innerHTML = utenti[i].getDurataTotale();
    let reset = document.createElement('div');
    reset.classList.add('reset');
    reset.innerHTML = '<i class="bi bi-x-circle-fill"></i>';
    let controls = document.createElement('div');
    controls.classList.add('controls-bottom');
    let call = document.createElement('img');
    call.src = 'img/green.svg';
    let utenze = document.createElement('img');
    utenze.src = 'img/users.svg';
    let ricarica = document.createElement('img');
    ricarica.src = 'img/credit.svg';
    phoneBody.appendChild(info1);
    info1.appendChild(h2);
    info1.appendChild(credito);
    phoneBody.appendChild(info2);
    info2.appendChild(h4_1);
    info2.appendChild(chiamate);
    info2.appendChild(h4_2);
    info2.appendChild(durataTot);
    info2.appendChild(reset);
    phoneBody.appendChild(controls);
    controls.appendChild(call);
    controls.appendChild(utenze);
    controls.appendChild(ricarica);
    reset.addEventListener('click', () => {
        user1.azzeraChiamate();
        initialize();
    });
    call.addEventListener('click', startCall);
    utenze.addEventListener('click', changeUser);
}
function startCall() {
    phoneBody.innerHTML = '';
    let destinatario = document.createElement('div');
    destinatario.classList.add('destinatario');
    let img = document.createElement('img');
    img.src = 'img/male.jpg';
    let h3 = document.createElement('h3');
    h3.innerHTML = 'John Doe';
    let timer = document.createElement('p');
    let controls = document.createElement('div');
    controls.classList.add('controls-bottom');
    let close = document.createElement('img');
    close.src = 'img/red.svg';
    phoneBody.appendChild(destinatario);
    destinatario.appendChild(img);
    destinatario.appendChild(h3);
    destinatario.appendChild(timer);
    phoneBody.appendChild(controls);
    controls.appendChild(close);
    let s = 0;
    let m = 0;
    let startTimer = setInterval(() => {
        s++;
        if (s === 60) {
            s = 0;
            m++;
            console.log(s);
        }
        if (s < 10) {
            timer.innerHTML = `${m}:0${s}`;
        }
        else {
            timer.innerHTML = `${m}:${s}`;
        }
    }, 1000);
    close.addEventListener('click', () => {
        clearInterval(startTimer);
        timer.innerHTML = '';
        let durata = s + (m * 60);
        utenti[i].chiamata(durata);
        initialize();
    });
}
function changeUser() {
    phoneBody.innerHTML = '';
    let info1 = document.createElement('div');
    info1.classList.add('info1');
    let h2 = document.createElement('h2');
    h2.innerHTML = 'Seleziona utenza';
    let utenze = document.createElement('div');
    utenze.classList.add('utenze');
    let famiglia = document.createElement('div');
    let h4_1 = document.createElement('h4');
    h4_1.innerHTML = 'Famiglia';
    let fami = document.createElement('i');
    fami.className = 'bi bi-person-heart';
    let business = document.createElement('div');
    let h4_2 = document.createElement('h4');
    h4_2.innerHTML = 'Business';
    let busi = document.createElement('i');
    busi.className = 'bi bi-briefcase-fill';
    let amici = document.createElement('div');
    let h4_3 = document.createElement('h4');
    h4_3.innerHTML = 'Amici';
    let fri = document.createElement('i');
    fri.className = 'bi bi-music-note-list';
    phoneBody.appendChild(info1);
    info1.appendChild(h2);
    phoneBody.appendChild(utenze);
    utenze.appendChild(famiglia);
    famiglia.appendChild(h4_1);
    famiglia.appendChild(fami);
    utenze.appendChild(business);
    business.appendChild(h4_2);
    business.appendChild(busi);
    utenze.appendChild(amici);
    amici.appendChild(h4_3);
    amici.appendChild(fri);
    famiglia.addEventListener('click', () => {
        i = 0;
        initialize();
    });
    business.addEventListener('click', () => {
        i = 1;
        initialize();
    });
    amici.addEventListener('click', () => {
        i = 2;
        initialize();
    });
}

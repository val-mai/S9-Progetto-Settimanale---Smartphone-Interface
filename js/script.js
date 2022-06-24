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
        utenti[i].azzeraChiamate();
        initialize();
    });
    call.addEventListener('click', startCall);
    utenze.addEventListener('click', changeUser);
    ricarica.addEventListener('click', addCredit);
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
function addCredit() {
    phoneBody.innerHTML = '';
    let back = document.createElement('i');
    back.className = 'bi bi-arrow-left-circle-fill home';
    let h5 = document.createElement('h5');
    h5.innerHTML = 'Back';
    let bottom = document.createElement('div');
    bottom.classList.add('ricarica-bottom');
    let creditcard = document.createElement('div');
    creditcard.classList.add('creditcard');
    let h3 = document.createElement('h3');
    h3.classList.add('creditname');
    h3.innerHTML = 'EpicPay';
    let p = document.createElement('p');
    p.innerHTML = '000 0000 0000 000'; //da modificare se rubrica
    let ricariche = document.createElement('div');
    ricariche.classList.add('ricariche');
    let ric5 = document.createElement('div');
    let p5 = document.createElement('p');
    p5.innerHTML = '5€';
    let ric10 = document.createElement('div');
    let p10 = document.createElement('p');
    p10.innerHTML = '10€';
    let ric20 = document.createElement('div');
    let p20 = document.createElement('p');
    p20.innerHTML = '20€';
    let ric50 = document.createElement('div');
    let p50 = document.createElement('p');
    p50.innerHTML = '50€';
    phoneBody.appendChild(back);
    phoneBody.appendChild(h5);
    phoneBody.appendChild(bottom);
    bottom.appendChild(creditcard);
    creditcard.appendChild(h3);
    creditcard.appendChild(p);
    bottom.appendChild(ricariche);
    ricariche.appendChild(ric5);
    ric5.appendChild(p5);
    ricariche.appendChild(ric10);
    ric10.appendChild(p10);
    ricariche.appendChild(ric20);
    ric20.appendChild(p20);
    ricariche.appendChild(ric50);
    ric50.appendChild(p50);
    back.addEventListener('click', initialize);
    ric5.addEventListener('click', () => {
        utenti[i].ricarica(5);
        initialize();
    });
    ric10.addEventListener('click', () => {
        utenti[i].ricarica(10);
        initialize();
    });
    ric20.addEventListener('click', () => {
        utenti[i].ricarica(20);
        initialize();
    });
    ric50.addEventListener('click', () => {
        utenti[i].ricarica(50);
        initialize();
    });
}

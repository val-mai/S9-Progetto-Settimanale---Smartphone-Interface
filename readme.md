## Interfaccia Smartphone

L'app riproduce  utilizzando *Typescript* l'interfaccia di uno smartphone con contratto a ricarica che condivide tre utenze differenti (Famiglia, Business, Amici).

### Tecnologie Utilizzate

<br>

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

<br>

### Screenshot

![ScreenSmartphoneInterface](https://user-images.githubusercontent.com/69992843/175811262-8e59748f-a47f-428f-a402-72236aa5b156.png)

### Dettagli 

La classe <code>SmatrphoneUser</code> è costituita da:

- <code>carica :number</code>  definisce il credito dell'utente
- <code>numeroChiamate :number</code>  definisce il numero dichiamate
- <code>durataTotale :number</code> definisce la durata totale delle chiamate effettuate in secondi
- <code>rubrica :Contacts[]</code> definisce i contatti presenti nella rubrica di ogni utenza
- <code>bankcount: string</code> definita come privata, riporta il numero della carta di credito dell'utente.

Metodi della classe <code>SmatrphoneUser</code>:

- <code>ricarica(unaRicarica: number): void</code> effettuare una ricarica del credito
- <code>chiamata(durata: number): void</code> effettuare una chiamata
- <code>numero404(): number</code> restituisce il credito disponibile
- <code>getNumeroChiamate(): number</code> restituisce il numero di chiamate totali
- <code>getDurataTotale(): string</code> restituisce la durata totale delle chiamate in minuti e secondi
- <code>azzeraChiamate(): void</code> azzera i contatori



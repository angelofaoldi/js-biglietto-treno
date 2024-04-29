// JS "Reset"
'use strict';

/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.

BONUS 
provate a completare il codice di Pari/Dispari di cui abbiamo parlato a lezione.
Sulla mia repo git trovate lo pseudo codice di riferimento.

*/

//-----------------------------------------------------------------------------------------

// VARIABILE ETà

const etaConst = document.getElementById('eta');

// VARIABILE KM

const distanzaConst = document.getElementById('distanza');

// VARIABILE "COSTO BIGLIETTO" = DISTANZA * 0.21

const prezzoKmConst = document.getElementById('prezzoKm');

// VARIABILE "COSTO BIGLIETTO INTERO"

const interoConst = document.getElementById('intero');

//-----------------------------------------------------------------------------------------

// VARIABILE INPUT DISTANZA

const distanza = Number(prompt('Quanti kilometri vuoi percorrere (km):'));

console.log('Distanza scelta: ', distanza, 'km');

// HTML INPUT DISTANZA

distanzaConst.innerHTML = 'Distanza scelta: ' + distanza + ' km';

//-----------------------------------------------------------------------------------------

// VARIABILE ETA' -> VALORE PROMPT

const etaAnni = Number(prompt('Quanti anni hai?'));

// VARIABILE KM 0.21

const prezzoPerKm = 0.21;

// HTML INPUT PREZZO PER KM 0.21

prezzoKmConst.innerHTML =  prezzoPerKm;

// VARIABILE FLESSIBILE LET COSTO BIGLIETTO

let interoCost = (distanza * prezzoPerKm);

// SCONTI 20% e 40%

const under18 = 20; const over65 = 40;
















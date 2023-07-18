// NAME UTENT
const firstname = prompt("Inserisci il tuo nome");

// LASTNAME UTENT
const lastname = prompt("Inserisci il tuo cognome");

// COLOR FAVORITE
const colorFavorite = prompt("Inserisci il tuo colore preferito");

// NUMERO 21
const number21 = "21";

// PASSWORD GENERATE
const passwordGenerate = firstname + lastname + colorFavorite + number21;

// PRINT PASSWORD GENERATE IN HTML WITH ID
document.getElementById("Password").innerHTML = passwordGenerate;

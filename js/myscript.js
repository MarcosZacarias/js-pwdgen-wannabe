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

// PASSWORD CREATE
const passwordCreate = `
<p>Nome: ${firstname}</p> 
<p>Cognome: ${lastname}</p>
<p>Colore preferito: ${colorFavorite}</p>
<p>Numero: ${number21} </p>
<p>Passwor Creata: <b>${passwordGenerate}</b></p>
`;

// PRINT PASSWORD GENERATE IN HTML WITH ID
document.getElementById("Password").innerHTML = passwordCreate;

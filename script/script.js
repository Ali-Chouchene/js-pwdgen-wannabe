/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
*/


/*
1.Prendo l'elemento dall DOM.
2.chiedo il nome all'utente (const).
3.chiedi il suo cognome (const).
4.chiedi il suo colore preferito (const).
5.creo variabile numerica (stringa non va sommato).
6.unisco i risultati per creare una password.
7.stampo sulla pagina.
*/

//1.
const targetResult = document.getElementById('result');

//2.
const firstName = prompt('Come ti chiami?', 'Ali');
////console.log(firstName)

//3.
const lastName = prompt('Quale è il tuo cognome?', 'Chouchene')
////console.log(lastName)
// alert("Benvenuto!");

const carica = () => {
    //controllo se ha compiato tutti i campi dando errore se ce ne sono di vuoti
    if (nome.value === "" || cognome.value === "" || telefono.value === "" || matricola.value === "") {
        alert("Tutti i campi sono obbligatori !");
    } else if (isNaN(matricola.value) || matricola.value < 0) {
        //controllo che la matricola sia un numero
        alert("La matricola può contenere solo numeri e non può essere negativa !");
    } else {
        //stampo un alert e inserisco i dati nel div
        let datiInseriti = "Nome: " + document.querySelector("#nome").value + " | Cognome: " + document.querySelector("#cognome").value + " | Matricola: " + document.querySelector("#matricola").value + " \n| Numero: (+39)" + document.querySelector("#telefono").value + " | Regione: " + document.querySelector("#regione").value;
        alert(datiInseriti);
        document.getElementById("datiWeb").innerHTML = datiInseriti;
    }
}
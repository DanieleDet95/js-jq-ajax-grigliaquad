$(document).ready(
  function(){

  // Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero
  // random da 1 a 9. Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato
  // diventa verde. Il numero ottenuto appare al centro del quadrato .

  // Al click del blocco
  $('.blocco').click(
    function(){

      // Mettere il blocco cliccato in una variabile
      var blocco = this;

      // Se il blocco cliccato é stato gia cliccato
      if ($(blocco).hasClass('yellow')||$(blocco).hasClass('green')) {
        alert('Blocco giá cliccato');
      } else {

        // Chiamata ajax
        $.ajax(
        {
          // Sito che genara numero da 1 a 9
          url: "https://flynn.boolean.careers/exercises/api/random/int",
          method: "GET",

          success: function(data, stato){
            // Stampa del numero nel blocco
            $(blocco).text(data.response);

            // Se il numero generato é minore uguale a 5
            if (data.response <= 5) {
              $(blocco).addClass('yellow');
            } else {
              $(blocco).addClass('green');
            }
          },

          error:  function(richiesta, stato, errori){
            alert('Errore caricamento file esterno');
          }
        })
      }

  });
});

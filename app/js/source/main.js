(function() {
  'use strict';

  $(document).ready(init);

  var numCards;
  var backCards;

  function init() {
    $('#start').click(startGame);
    $('.flipper').click(animate);
    numCards = $('.card').length;
  }

  function animate() {
    $(this).toggleClass('rotate');
  }

  function startGame() {
        generateArray();
        shuffleArray(backCards);

        console.log(backCards);
        loadArray();
       // timer();
      }

  function generateArray(){
      var firstCard = [];
      var secondCard = [];

      for (var i = 0; i < 10; i++){
        firstCard.push(i+1);
        secondCard.push(i+1);
      }

      backCards = firstCard.concat(secondCard);
      return backCards;
    }

  function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }

  function loadArray() {
    var $back = $('.back');
    var count = $back.length;
    var cards = [];

    for (var i = 0; i < count; i++){
      var image = '<img src="./media/card_' + backCards[i] + '.png" data-card="' + backCards[i] + '">';
      var whichBack = $back[i];
      $(whichBack).append(image);
    }

    console.log($back);
    console.log(cards);
  }



  // function timer() {
  //
  // }

  // function showCards() {
  //   // add .show class to currentCard
  //   // if show array length = 2
  //     // compareCards();
  //   }

  // function compareCards(){
  //   // compare the contents of two tds
  //   // if same, applyClass('correct')
  //   // removeClass('show')
  // }

}) ();

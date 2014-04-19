(function() {
  'use strict';

  $(document).ready(init);

  var clock;
  var timer;
  var numbers;
  // var numCards;
  // var backCards;

  function init() {
    $('#start').click(startGame);
    $('#game td').click(reveal);
    // $('.flipper').click(compareCards);
    // numCards = $('.card').length;
  }

  function startGame() {
        generateArray();
        shuffleArray(numbers);

        clearInterval(timer);
        clock = $('#clock').data('time')*1;
        timer = setInterval(updateClock,1000);
        // loadArray();
       // timer();
      }

  function generateArray(){
      numbers = [];

      for (var i = 0; i < 2; i++){
        for (var j = 0; j < 10; j++){
          numbers.push(j);
        }
      }
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

  function reveal(){
    var row = $(this).parent().index();
    var col = $(this).index();
    var pos = (row * 4) + col;
    var img = numbers[pos];

    $(this).find('.back').css('background-image', 'url(<img src="./media/card_' + img + '.png" data-card="' + img + '">)');
    $(this).find('.flipper').addClass('rotate');
    $(this).addClass('show');
    checkMatch();

  }

  // function loadArray() {
  //   var $back = $('.back');
  //   var count = $back.length;
  //
  //   for (var i = 0; i < count; i++){
  //     var image = '<img src="./media/card_' + backCards[i] + '.png" data-card="' + backCards[i] + '">';
  //     var whichBack = $back[i];
  //     $(whichBack).append(image);
  //   }
  //
  // }

  function updateClock(){
    clock--;

    if (clock > 0 && clock < 10){
      warning();
    } else if (!clock){
      clearInterval(timer);
      results();
    }

    $('#clock').text(clock);
  }

  function warning() {
    var opacity = $('body').css('opacity')*1;
    opacity -= 0.1;
    $('body').css('opacity', opacity);
  }

  function results() {
    var matches = $('.match').length;
    if (matches === 20) {
      alert ('You win!');
    } else {
      alert ('You lose.');
    }
  }

  function checkMatch() {
    var $matches = $('.show');

    if ($matches.length === 2){
      var td1 = $matches[0];
      var td2 = $matches[1];

      var img1 = $(td1).find('.back').css('background-image');
      var img2 = $(td2).find('.back').css('background-image');

      if (img1 === img2){
        $matches.addClass('match');
        $matches.off('click');
      } else {
        setTimeout(function() {
          $matches.find('.flipper').removeClass('rotate');
          //setTimeout(function() {
        //     $matches.find('.back').css('background-image', '');
        //
        // }, 1000);
        }, 1000);
      }
      $matches.removeClass('show');
    }
  }
  // function timer() {
  // revealBoard()
  // countdown()
  // closeBoard()  if numCards = flippedCardCount you win!
  // }


  // function compareCards(){
  //   var lastFlip = 0;
  //   var flippedCardCount = ('.flipper .rotate').length;
  //
  //   if (this.isClass('matched')) {
  //     return;
  //   }
  //
  //
  //
  //   if (flippedCardCount <= 1) {
  //     $(this).toggleClass('rotate');
  //
  //     var $img = $('.flipper .rotate > .back .matched');
  //
  //     $('.flipper .rotate > .back:not(.matched)').addClass('matched');
  //     if ($('.flipper .rotate > .back .matched').data('img') === lastFlip) {
  //       $img.addClass('flipped');
  //       lastFlip = 0;
  //     } else {
  //       lastFlip = $img.data;
  //     }
  //
  //
  //   } else {
  //     $(this).removeClass('rotate');
  //     lastFlip = 0;
  //   }


    // var lastFlip = 0;


//
// }

}) ();

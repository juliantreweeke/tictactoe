
var turn; // for checking who's turn it is
var drawCounter = 0; // for finding if there is a draw
var oscore = 0; // score for o player
var xscore = 0; // score for x playe
var win = false;

$('#xscore').text = xscore;

var game = {
    boxes: [ , , , , , , , , ,]
};



$( "td" ).click(function() {
  if(win){ return }; // check to see if the game has been one if so disable clicking
  drawCounter++ // counting number of turns done

  var go = Number($(this).attr('id'));

  if ( $('h2').text() === 'Player X Turn' && $(this).text() === ''){
    turn = 'x';
    $(this).text('x');
    game.boxes[go] = ($(this).text());

    $('h2').text('Player O Turn')
    checker();
    return;
  }
  if ( $('h2').text() === 'Player O Turn' && $(this).text() === '' ){
    turn = 'o';
    $(this).text('o').fadeIn();
    game.boxes[go] = ($(this).text());
    $('h2').text('Player X Turn');
    checker();
    return;
  }

});


var checker = function(){

  console.log(game.boxes);

  if(
    (game.boxes[0] === turn && game.boxes[1] === turn &&  game.boxes[2] === turn)
  ||(game.boxes[3] === turn && game.boxes[4] === turn &&  game.boxes[5] === turn)
  ||(game.boxes[6] === turn && game.boxes[7] === turn &&  game.boxes[8] === turn)
  ||(game.boxes[0] === turn && game.boxes[3] === turn &&  game.boxes[6] === turn)
  ||(game.boxes[1] === turn && game.boxes[4] === turn &&  game.boxes[7] === turn)
  ||(game.boxes[2] === turn && game.boxes[5] === turn &&  game.boxes[8] === turn)
  ||(game.boxes[0] === turn && game.boxes[4] === turn &&  game.boxes[8] === turn)
  ||(game.boxes[2] === turn && game.boxes[4] === turn &&  game.boxes[6] === turn)

  ){
    win = true;
    setTimeout(function(){
      $('.container').addClass('blur');
      $('#winner').text( turn );
      $('#outcome').show('slow');
    }, 1500);





    // if (turn = 'x'){
    //   xscore++
    //   turn = undefined;
    // } else {
    //   oscore++
    //   turn = undefined;
    // }
    //
    // $('#xscore').text( xscore );
    // $('#oscore').text( oscore );

  };
;

  if ( drawCounter === 9 ){
    $("#draw").show('slow');
    $('.container').addClass('blur');
  }


}; // function checker


$( '.yesbutton' ).click(function() { // yes button resets the game
    drawCounter === 0;
    scoreAddup();
    reset();
});




$( '.drawbutton' ).click(function() { // yes button resets the game
    drawCounter === 0;
    $('#xscore').text( xscore );
    $('#oscore').text( oscore );
    reset();
});






var reset = function(){
  win = false;
  $('.container').removeClass('blur');
  $('#score').show('slow');
  $('#xscore').text( xscore );
  $('#oscore').text( oscore );
  turn = 'x';
  drawCounter = 0; // reset draw counter
  $('#outcome').hide();
  $('#draw').hide();
  game.boxes = [ , , , , , , , , ,];
  $( 'h2' ).css({height: '500px',fontSize: '50px', color: 'blue' });
  $( 'h2' ).animate({height: '40px',fontSize: '25px', color: 'black' }, 1000);
  $( 'td' ).each(function() {
    $( this ).text( '' );

  });
};

var scoreAddup = function(){
  if (turn === 'x'){
      xscore += 1;
    };
  if (turn === 'o'){
      oscore += 1;
    };
};










$( ".nobutton" ).click(function() { // if you click no then the game ends
  scoreAddup();
  if (xscore === oscore){
    $('#outcome').text('It was a draw! Thank you for playing.');
    $('#draw').text('It was a draw! Thank you for playing.');
  };

  if (xscore > oscore){
    var champion = 'X Player wins with a total of ' + xscore + ' games won.';
  } else {
    var champion = 'O Player wins with a total of ' + oscore + ' games won.';
  }
  $('#outcome').text(champion);
  $('#draw').text(champion);

});

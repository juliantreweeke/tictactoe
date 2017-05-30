
var turn; // for checking who's turn it is
var drawCounter = 0; // for finding if there is a draw
var oscore = 0; // score for o player
var xscore = 0; // score for x playe
var win = false;
var playerX;
var playerO;
var currentPlayer;
var playerMovedFirst;
var rounds;



$('#xscore').text = xscore;

var game = {
    boxes: [ , , , , , , , , ,]
};

// intro with settings

$('.placeholder').click(function(){
  $( this ).val('');
});

$('#startbutton').click(function(ev){
  playerX =  $('#playerXName' ).val();
  playerO =  $('#playerOName').val();
  $('#settings').css('display', 'none');
  $('h2').text(playerX);
  currentPlayer = playerX; // sets current player
  rounds = $("#rounds input[type='radio']:checked").val(); // get number of rounds

});



























$( "td" ).click(function() {
  if(win){ return }; // check to see if the game has been one if so disable clicking
  drawCounter++ // counting number of turns done

  var go = Number($(this).attr('id'));

  if ( currentPlayer === playerX && $(this).text() === ''){ // if current player and the box is empty
    firstMove();
    turn = 'x'; // record who's turn it is
    $(this).text('x'); // put x in the box in html
    game.boxes[go] = ($(this).text()); // push the value of the box to the array
    $('h2').text(playerO); // change the player text to the other play
    checker();
    return;
  }
  if ( currentPlayer === playerO && $(this).text() === '' ){
    firstMove();
    turn = 'o';
    $(this).text('o');
    game.boxes[go] = ($(this).text());
    $('h2').text(playerX);
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
    win = true;                                // when someone wins
    setTimeout(function(){
      $('.container').addClass('blur');
      $('#winner').text( currentPlayer );
      $('#outcome').show('slow');

    }, 1500);
    return;
  };


  if ( drawCounter === 9 ){                    // if it is a draw
    $("#draw").show('slow');
    $('.container').addClass('blur');
    return;
  }

currentPlayer === playerX ? currentPlayer = playerO : currentPlayer = playerX;
  // this switches between players between each go
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






var reset = function(){ // reset the game
  playerMovedFirst === playerX ? currentPlayer = playerO : currentPlayer = playerX;
  alert(currentPlayer);
  win = false;
  $('.container').removeClass('blur');
  $('#score').show('slow');
  $('#xscore').text( xscore );
  $('#oscore').text( oscore );
  $('#playerX').text( playerX );
  $('#playerO').text( playerO );
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




var scoreAddup = function(){ // add up the score
  if (turn === 'x'){
      xscore += 1;
    };
  if (turn === 'o'){
      oscore += 1;
    };
};






var firstMove = function(){ // work out who moved first
  if (drawCounter === 1){
    playerMovedFirst = currentPlayer;
  }
};















$( ".nobutton" ).click(function() { // if you click no then the game ends
  scoreAddup();
  if (xscore === oscore){
    $('#outcome').text('It was a draw! Thank you for playing.');
    $('#draw').text('It was a draw! Thank you for playing.');
  };

  if (xscore > oscore){
    var champion = playerX + ' wins with a total of ' + xscore + ' games won.';
  } else {
    var champion = playerO + ' wins with a total of ' + oscore + ' games won.';
  }
  $('#outcome').text(champion);
  $('#draw').text(champion);

});

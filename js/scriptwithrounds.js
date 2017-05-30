
var turn; // for checking who's turn it is
var drawCounter = 0; // for finding if there is a draw
var oscore = 0; // score for o player
var xscore = 0; // score for x player
var win = false;
var playerX;
var playerO;
var currentPlayer;
var playerMovedFirst;
var rounds;
var gamesplayed = 0;




var hideGame = function(){ // when the game starts hide the game board
$('#outcome, #draw, #nextRound, #gameEnd').hide();
}
hideGame();




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
  // $('#settings').css('display', 'none');
  $('#settings').fadeOut('slow');
  $('h2').text(playerX);
  currentPlayer = playerX; // sets current player
  rounds = $("#rounds input[type='radio']:checked").val(); // get number of rounds
  alert(rounds);
});

























// this starts when someone clicks....

$( "td" ).click(function() {
  if(win){ return }; // check to see if the game has been one if so disable clicking
  drawCounter++ // counting number of turns done

  var go = Number($(this).attr('id'));

  if ( currentPlayer === playerX && $(this).text() === ''){ // if current player and the box is empty
    firstMove();
    turn = 'x'; // record who's turn it is
    $(this).text('x'); // put x in the box in html
    game.boxes[go] = ($(this).text()); // push the value of the box to the array
    // $('h2').text(playerO);
    $('h2').text(playerO).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    checker();
    return;
  }
  if ( currentPlayer === playerO && $(this).text() === '' ){
    firstMove();
    turn = 'o';
    $(this).text('o');
    game.boxes[go] = ($(this).text());
    $('h2').text(playerX).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    checker();
    return;
  }

});


















// check to see if anyone has one

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

    gamesplayed++;                             // when someone wins
    setTimeout(function(){
      $('.container').addClass('blur');
      $('#winner').text( currentPlayer + ' ' );
      $('#outcome').show('slow');
    }, 1000);
    return;
  };


  if ( drawCounter === 9 ){ // if it is a draw

    gamesplayed++;
    setTimeout(function(){
    $('.container').addClass('blur');
    $("#draw").show('slow');

  }, 1000);
    return;
  }

currentPlayer === playerX ? currentPlayer = playerO : currentPlayer = playerX;
  // this switches between players between each go
}; // function checker










$( '.yesbutton' ).click(function() { // yes button resets the game
    drawCounter === 0;
    scoreAddup();
    $('#nextRound').hide();
    reset();
});







$( '.drawbutton' ).click(function() { // yes button resets the game
    drawCounter === 0;
    $('#xscore').text( xscore );
    $('#oscore').text( oscore );
    reset();
});






// reset the game

var reset = function(){

  playerMovedFirst === playerX ? currentPlayer = playerO : currentPlayer = playerX;

  win = false;
  $('.container').removeClass('blur');
  $('#score').show('slow');
  $('#xscore').text( xscore );
  $('#oscore').text( oscore );
  $('#playerX').text( playerX );
  $('#playerO').text( playerO );
  turn = 'x';
  drawCounter = 0; // reset draw counter
  $('#outcome', '#draw').hide();
  game.boxes = [ , , , , , , , , ,]; // reset array
  // user name animation
  $( 'h2' ).css({height: '500px',fontSize: '50px', color: 'blue' });
  $( 'h2' ).animate({height: '40px',fontSize: '25px', color: 'black' }, 1000);
  $( 'td' ).each(function() { // clear every td from html
    $( this ).text( '' );

  });
};








// Add up the score to see who has won

var scoreAddup = function(){ // add up the score
  if (turn === 'x'){
      xscore += 1;
    };
  if (turn === 'o'){
      oscore += 1;
    };
};









// work out who moved first
var firstMove = function(){
  if (drawCounter === 1){
    playerMovedFirst = currentPlayer;
  }
};









$( "#outcome, #draw" ).click(function() { // when clicked draw or win screen go to scoring


  if ( gamesplayed >= rounds && rounds < 2 ){
    $('#outcome, #draw').hide();
    $('#gameEnd').show().text('Thank you for playing you bastard');
    // $('#outcome, #draw').text // hide the win popup
    return;
  };

  if ( gamesplayed >= rounds && rounds > 2 ){
    // $('#outcome, #draw').text('Thank you for playing you bastard'); // hide the win popup
    gameEnd();
    return;
  };

  $('#outcome, #draw').hide(); // hide the popups
  $('#nextRound').show();
});
















var gameEnd = function() { // end game scenario
  $('#outcome, #draw').hide();
  $('#gameEnd').show();
  if (xscore === oscore){
    $('#gameEnd').text('It was a draw you losers! Thank you for playing you bastards.');

  };


    if (xscore > oscore){
    var champion = playerX;
  } else {
    var champion = playerO ;
  }

  $('#gameEnd').text(playerX + "'s Score:" + xscore + "\n" + playerO + "'s Score:"  + oscore + "\n" + champion + ' is the winner!');

};

$('#gameEnd').click(function(){ // on end game window click to go to menu
  reset(); // reset game
  $('#score').hide(); // hide the score board
  oscore = 0; xscore = 0; // reset scores for new game
  hideGame(); // hide game board
  $('#settings').show(); // show menu
});



// var gameEnd = function() { // end game scenario
//
//   if (xscore === oscore){
//     $('#outcome, #draw').text('It was a draw you losers! Thank you for playing you bastards.');
//
//   };
//
//
//     if (xscore > oscore){
//     var champion = playerX;
//   } else {
//     var champion = playerO ;
//   }
//   $('#outcome, #draw').css('height', '200px');
//   $('#outcome, #draw').text(playerX + "'s Score:" + xscore + "\n" + playerO + "'s Score:"  + oscore + "\n" + champion + ' is the winner!');
//   // $('#draw').text(champion);
//
// };

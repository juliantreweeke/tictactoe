
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
var squares;
var cols;
var rows;
var diagconditions = [];
var diagsum = 0; // add up diagonal scores;



var hideGame = function(){ // when the game starts hide the game board
$('#outcome, #draw, #nextRound, #gameEnd').hide();
}

hideGame();

$('#xscore').text = xscore;

// var game = {
//     boxes: [ , , , , , , , , ,]
// };

 // boxes[i][j] = null;

var game = {    /// empty array

  boxes: []

};


// intro with settings

$('.placeholder').click(function(){
  $( this ).val('');
});

$('#startbutton').click(function(ev){
  gamesplayed = 0; // rest number of games played
  playerX =  $('#playerXName' ).val();
  playerO =  $('#playerOName').val();
  // $('#settings').css('display', 'none');
  $('#settings').fadeOut('slow');
  $('h2').text(playerX);
  currentPlayer = playerX; // sets current player
  rounds = $("#rounds input[type='radio']:checked").val(); // get number of rounds
  squares = $("#custom").val();


  // squares = +$("#squares input[type='radio']:checked").val(); // get number of rounds





  if (game.boxes.length === 0){ // generate new custom board size

      for (var rows = 0; rows < squares; rows++) {
        // rows

        // set each row to be a new empty array (i.e. of column values)
        game.boxes[rows] = [];

        for (var cols = 0; cols < squares; cols++) {
          // cols
          console.log('rows:', rows, 'cols:', cols);
          var $cell = $( '<div class="cell">' );
          $cell.attr('rows', rows).attr('cols', cols);
          $('#table').append($cell);
           game.boxes[rows][cols] = 0;
        }

      }

      // work out each cell size from N:
      //  - i.e

      // max width 520px (#table)
      //  for each cell size, we divide 520 / N



      // this should just be 520px hardcoded in CSS
      // $('#table').css('width', (rows*100 + 20) + 'px');
      // var tableWidth = 500 + (squares * 5);
      var tableWidth = 500 + (squares * 4);
      $('#table').css('width', tableWidth + 'px');
      var fontSize = Math.round( 350 / squares );
      $('.cell').css('font-size', fontSize + 'px');


      // set cell size
      var cellSize = 500 / squares;
      $('.cell').css({
        width:  cellSize + 'px',
        height: cellSize + 'px'
      });

      if (squares > 11){
        $('h2').css({'right': '10%', 'bottom': '87%'});
      }

      //   if (squares > 5){
      //   var dubsquares = squares * 2;
      // $('#table').css('width', (rows*100 + 100) + 'px');
      // $('h2').css({'right': '10%', 'bottom': '87%'});
      // };

      // if (squares > 5){
      //   var dubsquares = squares * 2;
      //   $('#table').css('width', (rows*50 + 50) + 'px');
      //   $('.cell').css({'width':'50px','height':'50px','font-size':'40px'});
      // // $('h2').css({'right': '10%', 'bottom': '87%'});
      // }

      // if (squares > 10){
      //   var dubsquares = squares * 2;
      //   $('#table').css('width', (rows*25 + 25) + 'px');
      //   $('.cell').css({'width':'25px','height':'25px'});
      //   // $('h2').css({'right': '10%', 'bottom': '87%'});
      // }

    } // if game.boxes.length

}); // startbutton





















// this starts when someone clicks....

$('#table').on('click','.cell',function(){

  if(win){ return }; // check to see if the game has been one if so disable clicking
  drawCounter++ // counting number of turns done

  // debugger;

  var gorow = +$(this).attr('rows');

  var gocol = +$(this).attr('cols');


  if ( currentPlayer === playerX && $(this).text() === ''){ // if current player and the box is empty
    firstMove();
    turn = 'x'; // record who's turn it is
    $(this).text('x'); // put x in the box in html

    game.boxes[gorow][gocol] = 1; // push the value of the box to the array
    // alert(game.boxes[gorow][gocol]);


    $('h2').text(playerO).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    checker();
    return;
  }
  if ( currentPlayer === playerO && $(this).text() === '' ){
    firstMove();
    turn = 'o';
    $(this).text('o');
    game.boxes[gorow][gocol] = -1;
    $('h2').text(playerX).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    checker();
    return;
  }

});


















// check to see if anyone has won

var checker = function(){

    var minusSquares = (squares - (squares * 2));

    for (var i = 0; i < squares; i++) {

    var rowSum = 0;

    for ( var j = 0; j < squares; j++) {

      rowSum += game.boxes[i][j];

    }; // second for loop
    if (rowSum === Number(squares)){
      // alert('x wins');
      winGame();
      return;
    };
      if (rowSum === minusSquares ) {
       alert('o wins');
       currentPlayer = playerO;

       winGame();
       return;
     };

   }; // first for loop

   /////// check columns

   for (var i = 0; i < squares; i++) {

   var colSum = 0;

   for ( var j = 0; j < squares; j++) {

   colSum += game.boxes[j][i];

  }; // second for loop

    if (colSum === Number(squares)){
      // alert('x wins');
      currentPlayer = playerX;
      winGame();
      return;
    };
      if (colSum === minusSquares) {
      //  alert('o wins');
       currentPlayer = playerO;
       winGame();
       return;
     };


 }; // first for loop



 for (var i = 0; i < squares; i++) {  // work out diagonal right;
   diagsum = 0;
   diagconditions[i] = game.boxes[i][i];
 };

      // add up diag conditions array
for (var i = 0; i < diagconditions.length; i++) {
    diagsum += diagconditions[i] << 0;
};



if ( diagsum === Number(squares)){
      alert('x wins');
      currentPlayer = playerX;
      winGame();
      return;
    };

if (diagsum === Number(minusSquares)){
       alert('o wins');
       currentPlayer = playerO;

       winGame();
       return;
    };




 for (var i = 0, j = squares - 1; i < squares; i++, j--) {  // work out diagonal left;
   diagsum = 0;
   diagconditions[i] = game.boxes[i][j];
 };

      // add up diag conditions array
for (var i = 0; i < diagconditions.length; i++) {
    diagsum += diagconditions[i] << 0;
};

// alert('diagsum: ' + diagsum + ' squares ' + squares );

if ( diagsum === Number(squares)){
      alert('x wins');
      winGame();
      return;
    };

if (diagsum === Number(minusSquares)){
       alert('o wins');
       winGame();
       return;
  };


  if ( drawCounter === Number(squares) * Number(squares) ) { // if it is a draw

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






// misc buttons and functions



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














var winGame = function(){

    win = true;

    gamesplayed++;                             // when someone wins
    setTimeout(function(){
      $('.container').addClass('blur');
      $('#winner').text( currentPlayer + ' ' );
      $('#outcome').show('slow');
    }, 1000);
    return;

};

// reset the game

var reset = function(){
  clear();

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
  // game.boxes = [ , , , , , , , , ,]; // reset array
  // user name animation
  $( 'h2' ).css({height: '500px',fontSize: '50px', color: 'blue' });
  $( 'h2' ).animate({height: '40px',fontSize: '25px', color: 'black' }, 1000);
  $( '.cell' ).each(function() { // clear every td from html
    $( this ).text( '' );

  });
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
  currentPlayer = playerX;
  scoreAddup();
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






var clear = function(){  // clears array

  game.boxes = [];

  for (var rows = 0; rows < squares; rows++) {
    game.boxes[rows] = [];
    for (var cols = 0; cols < squares; cols++) {
        game.boxes[rows][cols] = 0;
    }
  }
  console.log(game.boxes);
}; // clear function

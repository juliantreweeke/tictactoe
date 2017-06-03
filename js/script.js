// set global variables

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
var points;
var colorScheme = false;
var draw = false;

var game = { /// empty array

  boxes: [],

  hideGame: function() { // when the game starts hide the game board
    $('#outcome, #draw, #nextRound, #gameEnd').hide();
  },

};

game.hideGame();  // at start of game hide game board


// on settings screen if placeholder is clicked clear it.

$('.placeholder').click(function(){
  $( this ).val('');
});

// when start button is pressed generate game

$('#startbutton').click(function(ev) {

      $('#startSound').get(0).play(); // on start play sound effect

      gamesplayed = 0; // set number of games played
      playerX = $('#playerXName').val();
      playerO = $('#playerOName').val();
      // $('#settings').css('display', 'none');
      $('#settings').fadeOut('slow');
      $('h2').text(playerX);
      currentPlayer = playerX; // sets current player
      rounds = $("#rounds input[type='radio']:checked").val(); // get number of rounds
      squares = $("#custom").val();


  if (game.boxes.length === 0) { // if new game generate new custom board size

  for (var rows = 0; rows < squares; rows++) {
    // set each row to be a new empty array (i.e. of column values)
    game.boxes[rows] = [];
    for (var cols = 0; cols < squares; cols++) {
      var $cell = $('<div class="cell">');
      $cell.attr('rows', rows).attr('cols', cols);
      $('#table').append($cell);
      game.boxes[rows][cols] = 0;
    }

  }

  // work out table size and font size determined by intro settings
  var tableWidth = 500 + (squares * 4);
  $('#table').css('width', tableWidth + 'px');
  var fontSize = Math.round(350 / squares);
  $('.cell').css('font-size', fontSize + 'px');

  // set cell size
  var cellSize = 500 / squares;
  $('.cell').css({
    width: cellSize + 'px',
    height: cellSize + 'px'
  });
  // when game gets bigger move the player name to the top of the page
  if (squares > 11) {
    $('h2').css({
      'right': '10%',
      'bottom': '87%'
    });
  }

  // if random color is selected


  if ($('#color').is(':checked')) {
    colorScheme = true;
    randomColors();

  }; // color checked

}; // if game.boxes.length

}); // startbutton



var randomColors = function() {
  var colorbank = ["#ADD7F6", "#87BFFF", "#3F8EFC", "#2667FF", "#9CB9FF", "#D9ECFA", "#75AAB7"];
  var backroundbank = ["#4F6270", "#638BBA", "#2E68B8", "#122F74", "#3E5774", "#405D64"];

  var rand = colorbank[Math.floor(Math.random() * colorbank.length)];
  $('.cell').css('background-color', rand);
  $('#xscore, #oscore').css('color', rand);

  var backrand = backroundbank[Math.floor(Math.random() * colorbank.length)];
  $('body, #outcome, #draw, #nextRound, #gameEnd, .yesbutton').css('background', backrand);
  // $('body').css('background',backrand);

};






// when a cell is clicked

$('#table').on('click', '.cell', function() {

  if (win) {
    return
  }; // check to see if the game has been one if so disable clicking

  $('#xsound').get(0).play(); // on click play sound effect





  drawCounter++ // counting number of turns done

  // debugger;

  var gorow = +$(this).attr('rows');

  var gocol = +$(this).attr('cols');

  if (currentPlayer === playerX) {
    turn = 'x';
    points = 1;

  } else {
    turn = 'o';
    points = -1;
  }

  if ($(this).text() === '') {
    firstMove(); // determine if this is the first move of the game
    $(this).text(turn); // put a x or o in the squares
    game.boxes[gorow][gocol] = points; // push the point value of the player to the array

    // check all the conditions for a winner
    rowChecker();
    columnChecker();
    checkDiagRight();
    checkDiagLeft();
    // check conditions for a draw
    checkDraw();

    return;
  }

});


// scan through rows

var rowChecker = function() {

  for (var i = 0; i < squares; i++) {

    var sum = 0;

    for (var j = 0; j < squares; j++) {

      sum += game.boxes[i][j];
    }; // second for loop
    checkSum(sum);
  }
};

// scan through columns

var columnChecker = function(){

   for (var i = 0; i < squares; i++) {

   var sum = 0;

   for ( var j = 0; j < squares; j++) {

   sum += game.boxes[j][i];

  }
  checkSum(sum);
 }

};

// scan through diag right

var checkDiagRight = function(){

  for (var i = 0; i < squares; i++) {  // work out diagonal right;
   var sum = 0;
   diagconditions[i] = game.boxes[i][i];
  }
      // add up diag conditions array
  for (var i = 0; i < diagconditions.length; i++) {
    sum += diagconditions[i] << 0;
  }

  checkSum(sum);

}

// scan through diag left

var checkDiagLeft = function(){

  for (var i = 0, j = squares - 1; i < squares; i++, j--) {  // work   out diagonal left;
   var sum = 0;
   diagconditions[i] = game.boxes[i][j];
 }

      // add up diag conditions array
  for (var i = 0; i < diagconditions.length; i++) {
   sum += diagconditions[i] << 0;
 }

 checkSum(sum);

}

// check for a winning combination

var checkSum = function(sum) {
  var minusSquares = (squares - (squares * 2));
  if (sum === Number(squares)) {
    winGame();
    return;
  }
  if (sum === minusSquares) {
    winGame();
    return;
  }
};


// check if it's a draw
var checkDraw = function(){

  if ( drawCounter === Number(squares) * Number(squares) ) {
    gamesplayed++;
    draw = true;
    setTimeout(function(){
    $('.container').addClass('blur');
    $("#draw").show('slow');

   }, 1000);
   return;
  }

  switchPlayer(); // change player and update player name
}; // function checker



// change player and update player name
var switchPlayer = function() {
  currentPlayer === playerX ? currentPlayer = playerO : currentPlayer = playerX;

  $('h2').text(currentPlayer).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
};



// misc buttons and functions

$('.yesbutton').click(function() { // yes button resets the game
  drawCounter === 0;
  scoreAddup();
  $('#nextRound').hide();
  reset();
});


$('.drawbutton').click(function() { // yes button resets the game
  drawCounter === 0;
  $('#xscore').text(xscore);
  $('#oscore').text(oscore);
  reset();
});

// Add up the score to see who has won

var scoreAddup = function() { // add up the score
  if (draw) { // if the game is a draw toggle draw and don't add up
    draw = false;
    return;
  }
  if (turn === 'x') {
    xscore += 1;
  };
  if (turn === 'o') {
    oscore += 1;
  };
};

// work out who moved first
var firstMove = function() {
  if (drawCounter === 1) {
    playerMovedFirst = currentPlayer;
  }
};




// Flag the game as being won

var winGame = function() {
  $('#introSound').get(0).play(); // play sound effect
  switchPlayer(); // this is bug fix I can't work out
  win = true;
  gamesplayed++; // when someone wins
  setTimeout(function() {
    $('.container').addClass('blur');
    $('#winner').text(currentPlayer + ' ');
    $('#outcome').show('slow');
  }, 1000);
  return;

};


// reset the game

var reset = function() {
  clearArray();

  playerMovedFirst === playerX ? currentPlayer = playerO : currentPlayer = playerX;

  win = false;
  $('.container').removeClass('blur');
  $('#score').show('slow');
  $('#xscore').text(xscore);
  $('#oscore').text(oscore);
  $('#playerX').text(playerX);
  $('#playerO').text(playerO);

  turn = 'x';
  drawCounter = 0; // reset draw counter
  $('#outcome', '#draw').hide();
  // game.boxes = [ , , , , , , , , ,]; // reset array
  // user name animation
  $('h2').css({
    height: '500px',
    fontSize: '50px'
  });
  $('h2').animate({
    height: '40px',
    fontSize: '25px'
  }, 1000);
  $('.cell').each(function() { // clear every td from html
    $(this).text('');
    // if random colour scheme then change colours
    if (colorScheme) {
      randomColors()
    };

  });
};







// outcome pop up and check to see if total rounds have been played

$("#outcome, #draw").click(function() { // when clicked draw or win screen go to scoring


  if (gamesplayed >= rounds && rounds < 2) {
    $('#introSound').get(0).play(); // play sound effect
    $('#outcome, #draw').hide();
    $('#gameEnd').show().text('Thank you for playing you bastard');
    // $('#outcome, #draw').text // hide the win popup
    return;
  };

  if (gamesplayed >= rounds && rounds > 2) {
    // $('#outcome, #draw').text('Thank you for playing you bastard'); // hide the win popup
    gameEnd();
    return;
  };

  $('#outcome, #draw').hide(); // hide the popups
  $('#nextRound').show();
});
// end game scenario

var gameEnd = function() {
  $('#introSound').get(0).play(); // play sound effect
  currentPlayer = playerX;
  scoreAddup();
  $('#outcome, #draw').hide();
  $('#gameEnd').show();
  if (xscore === oscore) {
    $('#gameEnd').text('It was a draw you losers! Thank you for playing you bastards.');
    return;
  };

  if (xscore > oscore) {
    var champion = playerX;
  } else {
    var champion = playerO;
  }

  $('#gameEnd').text(playerX + "'s Score:" + xscore + "\n" + playerO + "'s Score:" + oscore + "\n" + champion + ' is the winner!');

};

$('#gameEnd').click(function() { // on end game window click to go to menu

  reset(); // reset game
  $('#score').hide(); // hide the score board
  oscore = 0;
  xscore = 0; // reset scores for new game
  game.hideGame(); // hide game board
  $('#settings').show(); // show menu
});

// clear the array for a new game

var clearArray = function() {

  game.boxes = [];

  for (var rows = 0; rows < squares; rows++) {
    game.boxes[rows] = [];
    for (var cols = 0; cols < squares; cols++) {
      game.boxes[rows][cols] = 0;
    }
  }
  console.log(game.boxes);
}; // clear function

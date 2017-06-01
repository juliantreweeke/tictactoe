
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




var hideGame = function(){ // when the game starts hide the game board
$('#outcome, #draw, #nextRound, #gameEnd').hide();
}
hideGame();




$('#xscore').text = xscore;

// var game = {
//     boxes: [ , , , , , , , , ,]
// };

 // boxes[i][j] = null;

var game = {

  boxes: []

  // boxes: [
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  // ]

};

// boxes row [0] col [0]
// boxes row [0] col [1]
// boxes row [0] col [2]


//
// var row1 = boxes[0];  // [0,1,2]
// var col2 = row1[1];   // 1

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
  squares = $("#squares input[type='radio']:checked").val(); // get number of rounds



  if (game.boxes.length === 0){ // generate new custom board size
      //
      // for(var i=0; i < squares ;i++){
      //     $('#table').append( '<div>' );
      //
      //       // game.boxes.push(' ,');
      //
      //   };
      //
      // for (var i = 0; i < squares; i++) {   // create array
      //   game.boxes = [];
      //   game.box[i][j] = null;
      //
      // };

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
           game.boxes[rows][cols] = null;
        }

      }


      $('#table').css('width', (rows*100 + 20) + 'px');



      // $('#table').addClass('table' + squares.toString());

      // $('#table > div').each(function(i){
      //   $( this ).attr('id', i).attr('class', 'boxo');
      //   // $( this ).attr('id', i).attr('class', 'boxo');
      //
      // });

      // for (var i = 0, j = 0, k = 0; i < squares; i++,k++) { // give boxes row id
      //
      //   $('#' + i ).attr('row', j);
      //   $('#' + i ).attr('col', k);
      //   if ( i === 2 || i === 5){j++};
      //   if ( k === 2){k = 0};
      //
      // };

      // for (var i = 0; i < squares; i++) {
      //     $('#' + i ).attr('row', i);
      //   for (var j = 0; j < 3; j++) {
      //     $('#' + i ).attr('col', j);
      //   }
      // };

      //
      // cols = -1;rows = 0;
      // for (var i = 0; i < squares; i++) { // assign every square col and row id
      //      cols++; if (cols > 2 ){cols = 0, rows++ };
      //      $('#' + i ).attr('col', cols);
      //      $('#' + i ).attr('row', rows);
      // };









        // for (var i = 0, j = 0 ; (i === 2) || (i === 5 ); j++) {
        //   alert(hi);
        //   console.log(i);
        //   $('#' + i ).attr('row', i);
        //   i++;
        //   if (i >= squares){break};
        // };

    } // if game.boxes.length

}); // startbutton



// for(var i=0, img; (img = imgs[i]) && (i < 12); i++)




















// "div > div", "#tab"

// this starts when someone clicks....

$('#table').on('click','.cell',function(){

  if(win){ return }; // check to see if the game has been one if so disable clicking
  drawCounter++ // counting number of turns done

  // var gorow = Number($(this).attr('row'));
  // var gocol = Number($(this).attr('col'));
  var gorow = ($(this).attr('rows'));
  // alert('gorow: ' + gorow);
  var gocol = ($(this).attr('cols'));
  // alert('gocol: ' + gocol);

  // alert(go);
  if ( currentPlayer === playerX && $(this).text() === ''){ // if current player and the box is empty
    firstMove();
    turn = 'x'; // record who's turn it is
    $(this).text('x'); // put x in the box in html
    game.boxes[gorow][gocol] = ($(this).text()); // push the value of the box to the array
    // $('h2').text(playerO);
    $('h2').text(playerO).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    checker();
    return;
  }
  if ( currentPlayer === playerO && $(this).text() === '' ){
    firstMove();
    turn = 'o';
    $(this).text('o');
    game.boxes[gorow][gocol] = ($(this).text());
    $('h2').text(playerX).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    checker();
    return;
  }

});


















// check to see if anyone has one

var checker = function(){

  // console.log(game.boxes);
  // var result;
  // for (var i = 0; i < squares; i++) {   // loop through all boxes
  //   for (var j = 0; j < squares; j++) {
  //      result = game.boxes[i][j];
  //     }
  //
  //   };


    // for (var rows = 0; rows < squares; rows++) {
    //     // rows
    //
    //     // set each row to be a new empty array (i.e. of column values)
    //     game.boxes[rows] = [];
    //
    //     for (var cols = 0; cols < squares; cols++) {
    //       // cols
    //     }
    //
    //     var result = game.boxes[rows][cols];
    //
    //

    // check rows

    for (var i = 0; i < squares; i++) {
      var rowSum = 0;
    } for (var j = 0; j < squares; j++) {
       rowsum += arr[i][j];
    }




    //   };


 for(var i = 0; i<3;i++){
        var rowSum = 0;
        for(var j = 0; j<3;j++){
            rowSum += arr[i][j];
        }
        if(rowSum === 3)
            alert("Circle WIN!");
        else if(rowSum === -3)
            alert("Cross WIN!");
    }

    for(var i = 0; i<3;i++){
        var colSum = 0;
        for(var j = 0; j<3;j++){
            colSum += arr[j][i];
        }
        if(colSum === 3)
            alert("Circle WIN!");
        else if(colSum === -3)
            alert("Cross WIN!");
    }

    if(arr[0][0] + arr[1][1] + arr[2][2] === 3)
        alert("Circle WIN!");
    else if(arr[0][0] + arr[1][1] + arr[2][2] === -3)
        alert("Cross WIN!");

    if(arr[2][0] + arr[1][1] + arr[0][2] === 3)
        alert("Circle WIN!");
    else if(arr[2][0] + arr[1][1] + arr[0][2] === -3)
        alert("Cross WIN!");
};






















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


  if ( drawCounter === squares ){ // if it is a draw

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
  $( '.boxo' ).each(function() { // clear every td from html
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

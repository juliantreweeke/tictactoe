
var turn;

var game = {
    boxes: [ , , , , , , , , ,],

};


// work out how to get value for box clicked




$( "td" ).click(function() {

  var go = Number($(this).attr('id'));
  // gameBoard.boxes[go] = 'x';


  if ( $('h2').text() === 'User 1' && $(this).text() === ''){
    turn = 'x';
    $(this).text('x');
    game.boxes[go] = ($(this).text());

    $('h2').text('User 2');
    checker();
    return;
  }
  if ( $('h2').text() === 'User 2' && $(this).text() === '' ){
    turn = 'o';
    $(this).text('o');
    game.boxes[go] = ($(this).text());
    $('h2').text('User 1');
    checker();
    return;
  }
  // box.push('x');
});


var checker = function(){
  console.log(game.boxes);


  //
  // if (game.boxes === ['x','x','x','o','o','o', , , ]){
  //   alert(turn + ' wins!')
  //   return;
  // }


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
    alert('player ' + turn + ' is the winner!!');
        return true;
  };









  // if( game.boxes[3] === 'x' && game.boxes[4] === 'x' &&  game.boxes[5] === 'x' )
  // if( game.boxes[0] === 'x' && game.boxes[1] === 'x' &&  game.boxes[2] === 'x' )
  // if( game.boxes[0] === 'x' && game.boxes[1] === 'x' &&  game.boxes[2] === 'x' )
  // if( game.boxes[0] === 'x' && game.boxes[1] === 'x' &&  game.boxes[2] === 'x' )
  // if( game.boxes[0] === 'x' && game.boxes[1] === 'x' &&  game.boxes[2] === 'x' )
  // if( game.boxes[0] === 'x' && game.boxes[1] === 'x' &&  game.boxes[2] === 'x' )
  // if( game.boxes[0] === 'x' && game.boxes[1] === 'x' &&  game.boxes[2] === 'x' )



};








// var checker = function(){
//
//
//   $('td').each(function(i){
//
//       // alert(i);
//
//       if ( $(this).text() !== '' ){
//
//       //  player1[go].push($(this).text());
//        console.log('player 1 moves ' + player1 );
//        };
//
//
//
//
//      });
//
//
//
//
//
//
//
//   if ( turn === 'player1'){
//     player1.push($(this).text())
//     console.log('player 1 moves ' + player1 );
//   };
//
//   if ( turn === 'player2'){
//     player2.push($(this).text())
//     console.log('player 2 moves ' + player2 );
//   };
//
//
//
//
// }; //checker function
//












var checker2 = function(){
  player1 = [];               // resets player arrays
  player2 = [];

  if (turn === 'player1'){

      $('td').each(function(i){

      if ( $(this).text() !== '' ){

       player1.push($(this).text() + i);
       console.log('player 1 moves ' + player1 );
       };

     }); // player 1 each loop

   } // if player 1

   if (turn === 'player2'){

      $('td').each(function(i){

      if ( $(this).text() !== '' ){

       player2.push($(this).text() + i);
       console.log('player 2 moves ' + player2 );
       };

     }); // player 2 each loop

   } // if player 2


}; // checker function



//   $('td').each(function(i){
//
//
//    if ( $(this).text() !== '' ){
//
//      if (turn === 'player1'){
//
//        player1.push($(this).text() + i);
//      };
//
//      if (turn === 'player2'){
//
//        player2.push($(this).text() + i);
//      }
//
//
//     //  $('#test').text(box).toString();
//    }
//
//
//   // console.log(i, $(this).text() );
//  });
//
//  console.log('player 1 moves ' + player1 );
//  console.log('player 2 moves ' + player2 );
//
// }





























// var checker = function(){
//   player1 = [];               // resets player arrays
//   player2 = [];
//
//
//
//   $('td').each(function(i){
//
//    if ( $(this).text() !== '' ){
//
//      if (turn === 'player1'){
//
//        player1.push($(this).text() + i);
//      };
//
//      if (turn === 'player2'){
//
//        player2.push($(this).text() + i);
//      }
//
//
//     //  $('#test').text(box).toString();
//    }
//
//
//   // console.log(i, $(this).text() );
//  });
//
//  console.log('player 1 moves ' + player1 );
//  console.log('player 2 moves ' + player2 );
//
// }








// var checker = function(){
//
//   $('td').each(function(i){
//    if ( $(this).text() === 'x'){
//      console.log(i);
//    }
//   // console.log(i, $(this).text() );
//  });
//
// }


// for (var i = 0; i < 9; i++) {
//   // var test = $("td" + i);
//   console.log(i, $('#td' + i).text()   );
//   if ($('#td' + i).text() === "x") {
//     alert("Test");
//  }
// }

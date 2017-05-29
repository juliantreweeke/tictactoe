

var player1 = [];
var player2 = [];
var turn;


$( "td" ).click(function() {

  if ( $('h2').text() === 'User 1' && $(this).text() === ''){
    turn = 'player1';
    $(this).text('x');
    $('h2').text('User 2');
    checker();
    return;
  }
  if ( $('h2').text() === 'User 2' && $(this).text() === '' ){
    turn = 'player2';
    $(this).text('o');
    $('h2').text('User 1');
    checker();
    return;
  }
  // box.push('x');
});


var checker = function(){



  if ( turn === 'player1'){
    player1.push($(this).text())
    console.log('player 1 moves ' + player1 );
  };

  if ( turn === 'player2'){
    player2.push($(this).text())
    console.log('player 2 moves ' + player2 );
  };




}; //checker function













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

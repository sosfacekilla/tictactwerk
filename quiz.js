var myGame = angular.module("TicTacToeApp", ["firebase"]);


var TTT_ctrl = function($scope, $firebase){
	var ticTacRef = new Firebase("https://alextictactoe.firebaseio.com/games");

var playerNum;

	var lastGame;
			// Ask for all existing game info from firebase
			ticTacRef.once('value', function(gamesSnapshot) {
				// get the actual games data
			  var games = gamesSnapshot.val();
				if(games == null)
				{
					// No games at all, so make a new game -- As if we're Areg
					lastGame = ticTacRef.push( {waiting: true} );
					playerNum = 1;
				}
				else	// I do have at least one game out there...
				{
				  var keys = Object.keys(games);
				  var lastGameKey = keys[ keys.length - 1 ];
				  var lastGame = games[ lastGameKey ];
					console.log("This person's game: " + lastGameKey);
				  if(lastGame.waiting)
				  {
				  	// Currently someone is waiting -- Areg is there and we're Rocky
				  	// Grab from Firebase its last game object
				  	lastGame = ticTacRef.child(lastGameKey);
				  	// Set a new game on this
				  	lastGame.set( {waiting:false, playerTurn: 0, won: false, board: ['','','','','','','','','']} );
				  	playerNum = 2;
				  }
				  else
				  {
				  	// Make a new game -- As if we're Areg
						lastGame = ticTacRef.push( {waiting: true} );
						playerNum = 1;
				  }
				}
				// Attach the last game to what we're up to
			  $scope.game = $firebase(lastGame);
			  )};
$scope.makeMove = function (clickedCell) {
if ($scope.game.cells[clickedCell] != "X" && $scope.game.cells[clickedCell] != "O") {
$scope.game.cells[clickedCell] = $scope.game.isXturn? "X" : "O";
$scope.game.isXturn = !$scope.game.isXturn;
console.log($scope.game.cells);
moves++;
}
checkWin();
};



$scope.game.$save()
 	var checkWin = function(){
 		// Horizontal Win Conditions -- X Wins
 		if($scope.game.cells[0]==$scope.game.cells[1]&&$scope.game.cells[1]==$scope.game.cells[2]&&$scope.game.cells[2]!=""&&$scope.game.cells[2]=="X") {
 			alert("X is the winner");
 	
 		}
 		if($scope.game.cells[3]==$scope.game.cells[4]&&$scope.game.cells[4]==$scope.game.cells[5]&&$scope.game.cells[5]!=""&&$scope.game.cells[5]=="X") {
 			alert("X is the winner");
 			
 		}
 		if($scope.game.cells[6]==$scope.game.cells[7]&&$scope.game.cells[7]==$scope.game.cells[8]&&$scope.game.cells[8]!=""&&$scope.game.cells[8]=="X") {
 			alert("X is the winner");
 
 		}

 		// Horizontal Win Conditions -- O Wins
 		if($scope.game.cells[0]==$scope.game.cells[1]&&$scope.game.cells[1]==$scope.game.cells[2]&&$scope.game.cells[2]!=""&&$scope.game.cells[2]=="O") {
 			alert("X is the winner");
 
 		}
 		if($scope.game.cells[3]==$scope.game.cells[4]&&$scope.game.cells[4]==$scope.game.cells[5]&&$scope.game.cells[5]!=""&&$scope.game.cells[5]=="O") {
 			alert("X is the winner");

 		}
 		if($scope.game.cells[6]==$scope.game.cells[7]&&$scope.game.cells[7]==$scope.game.cells[8]&&$scope.game.cells[8]!=""&&$scope.game.cells[8]=="O") {
 			alert("X is the winner");
 		
 		}

 		// Vertical Win Conditions -- X Wins
 		if($scope.game.cells[0]==$scope.game.cells[3]&&$scope.game.cells[3]==$scope.game.cells[6]&&$scope.game.cells[6]!=""&&$scope.game.cells[6]=="X") {
 			alert("X is the winner");
 	
 		}
 		if($scope.game.cells[1]==$scope.game.cells[4]&&$scope.game.cells[4]==$scope.game.cells[7]&&$scope.game.cells[7]!=""&&$scope.game.cells[7]=="X") {
 			alert("X is the winner");
 		
 		}
 		if($scope.game.cells[2]==$scope.game.cells[5]&&$scope.game.cells[5]==$scope.game.cells[8]&&$scope.game.cells[8]!=""&&$scope.game.cells[8]=="X") {
 			alert("X is the winner");
 	
 		}


 		// Vertical Win Conditions -- O Wins
 		if($scope.game.cells[0]==$scope.game.cells[3]&&$scope.game.cells[3]==$scope.game.cells[6]&&$scope.game.cells[6]!=""&&$scope.game.cells[6]=="O") {
 			alert("O is the winner");
 		
 		}
 		if($scope.game.cells[1]==$scope.game.cells[4]&&$scope.game.cells[4]==$scope.game.cells[7]&&$scope.game.cells[7]!=""&&$scope.game.cells[7]=="O") {
 			alert("O is the winner");
 		
 		}
 		if($scope.game.cells[2]==$scope.game.cells[5]&&$scope.game.cells[5]==$scope.game.cells[8]&&$scope.game.cells[8]!=""&&$scope.game.cells[8]=="O") {
 			alert("O is the winner");
 	
 		}

 		// Diagonal Win Conditions -- X Wins
 		if($scope.game.cells[0]==$scope.game.cells[4]&&$scope.game.cells[4]==$scope.game.cells[8]&&$scope.game.cells[8]!=""&&$scope.game.cells[8]=="X") {
 			alert("X is the winner");
 		
 		}
 		if($scope.game.cells[2]==$scope.game.cells[4]&&$scope.game.cells[4]==$scope.game.cells[6]&&$scope.game.cells[6]!=""&&$scope.game.cells[6]=="X") {
 			alert("X is the winner");
 		
 		}

 		// Diagonal Win Conditions -- O Wins
 		if($scope.game.cells[0]==$scope.game.cells[4]&&$scope.game.cells[4]==$scope.game.cells[8]&&$scope.game.cells[8]!=""&&$scope.game.cells[8]=="O") {
 			alert("O is the winner");
 			
 		}
 		if($scope.game.cells[2]==$scope.game.cells[4]&&$scope.game.cells[4]==$scope.game.cells[6]&&$scope.game.cells[6]!=""&&$scope.game.cells[6]=="O") {
 			alert("O is the winner");
 		
 		}

 		//Cat's Game
 		if(moves == 9 && winner == false){
 			alert("Try Again");
 			
 		}

 		// no win, keep going
 		else {
 			// nothing
 		}

 	
 	
 		
 	};
 };



 




   
    

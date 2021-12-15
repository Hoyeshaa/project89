var p1 = localStorage.getItem("player1");
var p2 = localStorage.getItem("player2");
p1score = 0;
p2score = 0;
document.getElementById("p1").innerHTML = p1;
document.getElementById("p2").innerHTML = p2;
document.getElementById("player1Score").innerHTML = p1score;
document.getElementById("player2Score").innerHTML = p2score;
document.getElementById("playerQuestion").innerHTML = "Question Turn: "+p1;
document.getElementById("playerAnswer").innerHTML = "Answer Turn: "+p2;
function gameStart(){
   Number1 = document.getElementById("N1").value;
   Number2 = document.getElementById("N2").value;
   Question = Number1 + "x" + Number2;
   Q = "<h3>"+Question +"</h3>";
   input = "<input id='ans' placeholder='Type your answer' type='text' class='form-control'>";
   button = "<button id='check' onclick='check()' class='btn btn-success'>Check</button>";
   Div = Q + input + button;
   document.getElementById("output").innerHTML = Div;
   document.getElementById("N1").value = "";
   document.getElementById("N2").value = "";
  }
quetion_turn = "player_1";
answer_turn = "player_2";
function check(){
  answer = document.getElementById("ans").value;
  answer = Number(answer);
  correctAnswer = Number(Number1)*Number(Number2);
  if(answer == correctAnswer){
      if(answer_turn == "player_1"){
          p1score = p1score + 1;
          document.getElementById("player1Score").innerHTML = p1score;
      }
      else{
        p2score = p2score + 1;
        document.getElementById("player2Score").innerHTML = p2score;
      }
  }
  if(quetion_turn == "player_1"){
      quetion_turn = "player_2";
      document.getElementById("playerQuestion").innerHTML = "Question turn : "+ p2;
  }
  else{
    quetion_turn = "player_1";
    document.getElementById("playerQuestion").innerHTML = "Question turn : "+ p1;
  }
  if(answer_turn == "player_1"){
      answer_turn = "player_2";
      document.getElementById("playerAnswer").innerHTML = "Answer turn : "+ p2;
  }
  else{
    answer_turn = "player_1";
    document.getElementById("playerAnswer").innerHTML = "Answer turn : "+ p1;
  }
  document.getElementById("output").innerHTML = "";
}
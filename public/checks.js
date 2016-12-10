//checks user's answers once they click submit
//if answer is correct, highlight in green
//if answer is incorrect, highlight in red
//display score at the bottom of the page

var submit = document.getElementsByClassName('submit-button');

submit[0].addEventListener('click', clickSubmit);
var right = 0;
var total = 0;
var score;

function clickSubmit(){
  console.log('submit button clicked!');
  var x = document.querySelectorAll('.correct');
  for (var i = 0; i < x.length; i++){
    total += 1;
    if (x[i].checked == false){
      //if incorrect answer selected, turn value red by adding css class "turn-red"
      x[i].parentNode.setAttribute('class','red')
    } else {
      x[i].parentNode.setAttribute('class','green')
      right += 1;
    }
  }
  score = (right/total)*100;
  console.log("right: ", right, "total: ", total, "score: ", score, "% ");

  var body = document.querySelectorAll('main')[0];
  var score = document.createElement('h2');
  body.appendChild(score);
  var scoreTxt = "Your Score: " + score + "% ";
  score.appendChild(document.createTextNode(scoreTxt));
}

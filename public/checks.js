//checks user's answers once they click submit
//if answer is correct, highlight in green
//if answer is incorrect, highlight in red
//display score at the bottom of the page

var submit = document.getElementsByClassName('submit-button');

submit[0].addEventListener('click', checkAns);

function checkAns() {
  console.log('clicked!');
  var x = document.querySelectorAll('.correct');
  for (var i = 0; i < x.length; i++){
    //turn correct answer green
    console.log('turn green');
    if (x[i].checked == false){
      //if incorrect answer selected, turn value red by adding css class "turn-red"
      console.log(x[i], 'turn red');
      //also
    }
  }
}

function checkAns() {


  var x = document.querySelectorAll('.correct');
  for (var i = 0; i < x.length; i++){
    if (x[i].parentNode.value != x[i]){
      //turn value red-- by adding css class "turn-red"
    }
    //always turn correct answer green--by adding css class "turn-green"
  }
}

//checks user's answers once they click submit
//if answer is correct, highlight in green
//if answer is incorrect, highlight in red
//display score at the bottom of the page

var submit = document.getElementsByClassName('submit-button');

submit[0].addEventListener('click', clickSubmit);

function clickSubmit(){
  console.log('submit button clicked!');
  var x = document.querySelectorAll('.correct');
  for (var i = 0; i < x.length; i++){
    if (x[i].checked == false){
      //if incorrect answer selected, turn value red by adding css class "turn-red"
      console.log(x[i], 'turn red');
      x[i].parentNode.setAttribute('class','red')
    } else {
      x[i].parentNode.setAttribute('class','green')
    }
  }
}

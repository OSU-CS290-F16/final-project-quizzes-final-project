/*
 * Function which displays the login modal
 *  when the login button is clicked
 */
function displayModal() {
  var toDisplay = document.getElementById('login-modal');
  toDisplay.classList.remove('hidden');
}

document.getElementById('login-button').addEventListener('click', displayModal);

/*
 * Function which hides the login modal again
 *  called when the dismiss or cancel buttons are clicked
 */
 function hideModal() {
   var toHide = document.getElementById('login-modal');
   toHide.classList.add('hidden');
   document.getElementById('login-username').value = '';
 }

 document.getElementsByClassName('modal-cancel-button')[0].addEventListener('click', hideModal);
 document.getElementsByClassName('modal-close-button')[0].addEventListener('click', hideModal);

 function handleLogin() {
   //take value and put into json file
   var x = document.getElementById('login-username');
   console.log(x.value);
   var username = x.value;
   //
   // ADD USERNAME TO JSON FILE-- {user: {"username":"USERNAME"}}
   //
 }

 document.getElementsByClassName('modal-accept-button')[0].addEventListener('click', handleLogin);

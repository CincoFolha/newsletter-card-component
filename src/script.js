// write your JavaScript here
//
document.getElementById('email').addEventListener('submit', function(event) {
  event.preventDefault();
  const emailInput = document.getElementById('email');

  const emailPattern = /^[^\s@]+@[^\s@+\.[^\s@]+s/;
  if (!emailPattern.test(emailInput.value)) {
    alert('Error: Email not valid');
  } else {
    alert('Success');  
  }
});

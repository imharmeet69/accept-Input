let username;


document.getElementById('mySumbit').onclick = function (){
  username = document.getElementById('myText').value;
  document.getElementById('myH1').textContent = `Hello ${username}`;
};


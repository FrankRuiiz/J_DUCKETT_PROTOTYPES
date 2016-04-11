/**
 * Created by FrankyR on 4/11/2016.
 */

if (window.localStorage) {
    console.log("True");
    var txtUsername = document.getElementById('username');
    var txtAnswer = document.getElementById('answer');

    txtUsername.value = localStorage.getItem('username');
    txtAnswer.value = localStorage.getItem('answer');

    txtUsername.addEventListener('input', function(){
        localStorage.setItem('username', txtUsername.value);
    }, false);

    txtAnswer.addEventListener('input', function(){
        localStorage.setItem('answer', txtAnswer.value);
    }, false);
}

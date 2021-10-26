// document
//     .getElementById('SubmitLogPass')
//     .addEventListener('click') = function(){
//     let login = document.getElementById('login').value;
//     let password = document.getElementById('password').value;

//     if(login == 'admin' && password == 'admin')
//     alert('Welcome');
// }
function verification(){
        let login = document.getElementById('login').value;
        let password = document.getElementById('password').value;
    
        (login == 'admin' && password == 'admin')?alert('Welcome'):alert("Incorrect login or password!");
}

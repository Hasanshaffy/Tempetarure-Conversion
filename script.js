document.getElementById('mybutton').onclick = function(){
    let temp;
    if(document.getElementById('mycels').checked){
        temp = document.getElementById('myinput').value
        temp = Number(temp);
        temp = (temp - 32) * (5/9);
        temp = document.getElementById('answer').innerHTML = 'Temp ' + temp;
    }
    else if(document.getElementById('myfahren').checked){
        temp = document.getElementById('myinput').value;
        temp = Number(temp);
        temp = temp * 9/5 + 32
        temp = document.getElementById('answer').innerHTML = 'Temp ' + temp;
    }   




}

let obj = {
    age : document.querySelector('input').value,
    button : document.querySelector('button'),
    error : 'вы еще молоды',
    error2 : 'Введите возраст'
}
obj.button.addEventListener('click', function () {
    let num = parseInt(obj.age); 
    console.log (obj.age);
    if (obj.age.length == 0) {
       return alert(obj.error2);
    }  else if (num > 16){
        return alert('добро пожаловать');
    } else {
        return alert(obj.error);
    }
     
    
})
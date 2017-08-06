let obj = {
    age : document.querySelector('input').value,
    button : document.querySelector('button'),
    error : 'вы еще молоды'
}
obj.button.addEventListener('click', function () {
    let num = parseInt(obj.age); 
    
    if (num > 16) {
        return alert('добро пожаловать');
    } 
    
    return alert(obj.error);
})
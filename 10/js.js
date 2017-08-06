let obj = {
    num : document.querySelector('input').value,
    button : document.querySelector('button'),

}
obj.button.addEventListener('click', function () {
    if (obj.num >= 10) {
        return alert(Math.pow(obj.num, 2) +' квадрат ' + obj.num);
    } else if (obj.num == 8 || obj.num == 9){
        return alert( '7 ' + 'или ' + '8');
    } else {
        return alert ('число меньше 7');
    }
})
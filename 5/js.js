let obj = {
    num : document.getElementById('num').value,
    pow : document.getElementById('pow').value,
    p : document.querySelector('p'),
    button : document.querySelector('button'),
    error : "Введите число"
}
obj.button.addEventListener('click', (function () {
    
    function addPow(number, power, err) {
        number = parseInt(number);
        power = parseInt(power);
        if (isNaN(number) || isNaN(power)) {
            alert(err);
        } else {
        let result = Math.pow(number, power);
        obj.p.innerHTML = result;
        }
    }
addPow(obj.num, obj.pow, obj.error);
}
));
 



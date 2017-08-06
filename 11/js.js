let obj = {
    button :document.querySelector('button'),
    ranNum : Math.floor((Math.random() * 10) + 1),
    num : document.querySelector('input'),
    count : 0,
    p : document.querySelector('p')
}
console.log (obj.ranNum);
 
obj.button.addEventListener('click', function () {
 
    obj.count++;

    if (obj.count == 1) {
        etap();
    }

    if (obj.count == 2) {
        etap();
    }
  
    if (obj.count == 3) {
        etapEnd();
    }

})

function etap() {
    obj.p.innerHTML = 'Попытка: ' + obj.count  ;
    if (obj.ranNum == obj.num.value) {
         alert ('ВЫ ВЫИГРАЛИ!');
    } else {
        // alert ('uuuu');
        if (obj.ranNum < obj.num.value) {
            alert ('Ваше число больше за загаданое');
        } else {
            alert ('Ваше число меньше за загаданое');
        }
    }
}  

function etapEnd() {
    obj.p.innerHTML = 'Попытка: ' + obj.count  ;
    if (obj.ranNum == obj.num.value) {
         alert ('ВЫ ВЫИГРАЛИ!');
    } else {
        alert ('Вы проиграли использовав все попытки');
       
    }
}  
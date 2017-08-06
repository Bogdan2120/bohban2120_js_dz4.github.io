let obj = {
    p : document.querySelector('p'),
    erorr : 'Массив пуст',
    arr : [4,5,6],
    button : document.querySelector('button')
}
obj.button.addEventListener('click', function(){

    if (obj.arr.length == 0) {
        return alert (obj.erorr);
    } else {
        for (let i = 0; i < obj.arr.length; i++) { 
            return alert(obj.arr[i]);
        }
    }
})
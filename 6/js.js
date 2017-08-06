let obj = {
    teg : document.getElementById('teg').value,
    button : document.querySelector('button')
}

obj.button.addEventListener('click', function () {
    function tegUnderline(elem) {
    let  elems= document.getElementsByTagName(elem);
    for (var i = 0; i < elems.length; i++) {
        elems[i].style.textDecoration = 'underline'; 
        console.log (elems[i]);
    }
}
tegUnderline (obj.teg);
} );




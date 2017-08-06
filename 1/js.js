function tegColor(elem) {
    let  elems= document.getElementsByTagName(elem);
    for (var i = 0; i < elems.length; i++) {
        elems[i].style.color = 'red'; 
        console.log (elems[i]);

    }
    
}
tegColor ('p');
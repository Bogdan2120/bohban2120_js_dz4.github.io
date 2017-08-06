function tegColor(elem) {
    let  elems= document.getElementsByTagName(elem);
    for (var i = 0; i < elems.length; i++) {
        elems[i].style.boxShadow = '0 0 10px rgba(0,0,0,0.5)'; 
        console.log (elems[i]);

    }
    
}
tegColor ('img');
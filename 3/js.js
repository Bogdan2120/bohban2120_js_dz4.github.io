function tegColor(elem) {
    let  elems = document.getElementsByTagName(elem);
    for (var i = 0; i < elems.length; i++) {
        let text = elems[i].textContent;
        let out = '';
        out =+ i ;
        text = out + ', ' + text;
        // let per = elems[i].textContent = i; 
        // let per1 = elems[i];
        // out += per + per1;
        console.log (elems[i]);
      // text = i + '. ' + text;

    }
    
}
tegColor ('p');
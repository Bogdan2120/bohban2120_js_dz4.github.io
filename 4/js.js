let obj = {
    button1 : document.getElementById('but-1'),
    button2 : document.getElementById('but-2'),
    p : document.querySelector('p'),
    count : 0
}

obj.button1.addEventListener('click', sumClick);
obj.button2.addEventListener('click', sumClick);

function sumClick() {
    obj.count++;
    obj.p.innerHTML = obj.count;
}
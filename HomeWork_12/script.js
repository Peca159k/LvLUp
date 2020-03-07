const add = document.getElementById("button1");
const text = document.getElementById("text");
const ul = document.getElementById("list");
let counter = 0;

add.onclick = function() {
    counter += 1;
    let t = document.getElementById("p").innerHTML = "Осталось сделать " + counter;

    let data = document.createElement("div");
    let btn = document.createElement("BUTTON");
    let check = document.createElement("checkbox");
    btn.id = 'delete';
    btn.innerHTML = "delete";                   
    check.id = 'check';
    check.innerHTML += '<input type="checkbox">';
    
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = text.value;
    li.appendChild(btn);
    li.appendChild(check);
    text.value = "";
    btn.onclick = function() {
        li.parentNode.removeChild(li);
        counter -= 1;
        let t = document.getElementById("p").innerHTML = "Осталось сделать " + counter;
    }
    
    check.onchange = function(e) {
        console.log(e.target.checked);
        if(e.target.checked == true){
            li.style.textDecoration = 'line-through';
            counter -= 1;
            let t = document.getElementById("p").innerHTML = "Осталось сделать " + counter;
        }
        else{
            li.style.textDecoration = 'none';
            counter += 1;
            let t = document.getElementById("p").innerHTML = "Осталось сделать " + counter;
        }
    }
}
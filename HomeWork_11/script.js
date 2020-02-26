const add = document.getElementById("button1");
const text = document.getElementById("text");
const ul = document.getElementById("list");

add.onclick = function() {
    let data = document.createElement("div");
    let btn = document.createElement("BUTTON");
    btn.id = 'delete';
    btn.innerHTML = "delete";                   
    // data.innerHTML = text.value;
    // data.appendChild(btn);
    // document.body.appendChild(data);
    
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = text.value;
    li.appendChild(btn);
    text.value = "";
    btn.onclick = function() {
        li.parentNode.removeChild(li);
        // data.parentNode.removeChild(data);
    }
}


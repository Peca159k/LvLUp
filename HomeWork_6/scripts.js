function myFunction() {
    let sports = ["Football","Basketball","Volleyball","Ping pong","Boxing"];
    let newDiv;
    let text;
    for(var i = 0; i < sports.length; i++) {
        newDiv = document.createElement("div");
        if(i == sports.length - 2){
            text = sports[i] + " and ";
        } 
        else if(i == sports.length - 1){
            text = sports[i] + ".";
        }
        else {
            text = sports[i] + ", ";
        }

        text = document.createTextNode(text);
        newDiv.appendChild(text);
        document.getElementById("sports").appendChild(newDiv);
    }
}

//myFunction(); если нужно вывести только 1 раз

myFunction();


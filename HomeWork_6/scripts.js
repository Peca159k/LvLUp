function myFunction() {
    let sports = ["Football","Basketball","Volleyball","Ping pong","Boxing"];
    let newDiv = document.createElement("div");
    for(var i = 0; i < sports.length; i++) {
        if(i == sports.length - 2){
            const text = document.createTextNode(sports[i] + " and ");
	        newDiv.appendChild(text);
	        document.getElementById("sports").appendChild(newDiv);
        } 
        else if(i == sports.length - 1){   
            const text = document.createTextNode(sports[i] + ".");
            newDiv.appendChild(text);
            document.getElementById("sports").appendChild(newDiv);
        }
        else {
        const text = document.createTextNode(sports[i] + ", ");
	    newDiv.appendChild(text);
        document.getElementById("sports").appendChild(newDiv);
        }
    }
}

//myFunction(); если нужно вывести только 1 раз

for(let i = 0; i < 8; i++){
    myFunction();
}


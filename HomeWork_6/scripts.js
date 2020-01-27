function myFunction() {
    let sports = ["Football","Basketball","Volleyball","Ping pong","Boxing"];
    let newDiv;

    for(var i = 0; i < sports.length; i++) {
        
        if(i == sports.length - 2){
            newDiv = document.createElement("div");
            const text = document.createTextNode(sports[i] + " and ");
	        newDiv.appendChild(text);
	        document.getElementById("sports").appendChild(newDiv);
        } 
        else if(i == sports.length - 1){   
            newDiv = document.createElement("div");
            const text = document.createTextNode(sports[i] + ".");
            newDiv.appendChild(text);
            document.getElementById("sports").appendChild(newDiv);
        }
        else {
            newDiv = document.createElement("div");
            const text = document.createTextNode(sports[i] + ", ");
            newDiv.appendChild(text);
            document.getElementById("sports").appendChild(newDiv);
        }
    }
}

myFunction();

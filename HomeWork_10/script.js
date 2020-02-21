    const password = document.getElementById("passw")
    const username = document.getElementById("usern");
    const birthday = document.getElementById("birthday");

    
    let submit = document.querySelector('.submit');    
    

submit.onclick = function(e) {
    let str = username.value.toLowerCase();
        var check = true;
        if(username.value !== str){
            username.classList.remove('good');
            username.classList.add('error');
            check = false;
        } else {
            username.classList.remove('error');
            username.classList.add('good');
            e.preventDefault();
        }

        if(password.value.length>=6 && password.value.length<=16) {
            password.classList.add('goode');
            password.classList.remove('errore');
        } else {
            password.classList.remove('goode');
            password.classList.add('errore');
            e.preventDefault();
        }

        if(username.value == str && (password.value.length>=6 && password.value.length<=16)){
            alert("LOGIN");
        }

        if(birthday.value>13){
            birthday.classList.add("good");
            birthday.classList.remove("error");
        } else {
            birthday.classList.add("error");
            birthday.classList.remove("good");
        }

        if(!check) {
            e.preventDefault();
        }
    }


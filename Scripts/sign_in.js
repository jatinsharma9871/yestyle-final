var n = document.querySelector("#box1");
    var m = document.querySelector("#box2");
    n_btn = document.querySelector("label.slidelogin");
    m_btn = document.querySelector("label.slidesignup");
    m_btn.addEventListener('click', ch);
    n_btn.addEventListener('click', chr);
    //n_btn.addEventListener('click',change)
    //console.log(n_btn);

    function ch() {

        n.style.marginLeft = "-50%";

    }

    function chr() {
        n.style.marginLeft = "0%";
    }
    function newM(e) {
        e.preventDefault();

        let myForm1 = document.getElementById("myForm1");
        myForm1.addEventListener("submit",chr);

        let email = myForm1.email.value;
        let password = myForm1.password.value;

        console.log(email, password);

        if (localStorage.getItem('YesUsers') == null) {
            localStorage.setItem("YesUsers", JSON.stringify([]));
        }

        var user = {
            
            email,
            password,
            
        }
        
        
        let arr = JSON.parse(localStorage.getItem("YesUsers"));
        arr.push(user);
        console.log(arr)
        alert("User successfully registered");
        localStorage.setItem("YesUsers", JSON.stringify(arr))
    }
    
    if(localStorage.getItem("flagforlogin") === null) {
        let flag = localStorage.setItem("flagforlogin",JSON.stringify([]));
    }
    let flag_login = false;

    function member(e) {
        e.preventDefault();
        let myForm2 = document.getElementById("myForm2");

        let email_m = myForm2.email_m.value;
        let password_m = myForm2.password_m.value;

        let details = JSON.parse(localStorage.getItem("YesUsers"))

        let count = 0;

        details.forEach(function (user) {
            if (email_m == user.email && password_m == user.password) {
                count++;
                flag_login = true;
            }
        })

        var login_flag = JSON.parse(localStorage.getItem("flagforlogin"));
        login_flag[0] = flag_login;
        login_flag[1] = email_m;
        login_flag[2] = password_m;

        localStorage.setItem("flagforlogin",JSON.stringify(login_flag));

        if (count == 0) {
            alert('invalid Credentials')
        }
        else{
              window.location.href="homepage.html";
        }
        
        // console.log(flag_login);
   }
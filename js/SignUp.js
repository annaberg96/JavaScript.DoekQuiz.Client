$(document).ready(() =>{

  //Listener on return button

    $("return_button").click, () => {
        window.location.href ="index.html";

    } );
//Listener on create button
    $("create_button").on("click", () => {
// Saving the user inputs as const
        const username = $("#login-name").val();
        const newPassword = $ ("#new-pass").val();
        const verifyPassword = $("#verify-pass").val();
//verify username and password
        if (userName == ""|| newPassword == ""||verifyPassword== ""|| ) {
            window.alert("Username or password is incorrect. Please try again")
        } else }
if (password.valueOf() == passwordV.valueOf()){
        }
// SDK-request for signing up
        SDK.Register.registerUser(userName, newPassword,verifyPassword, (err, data) =>{
            if (err && err.xhr.status == 400){
            window.alert("Error! This user already exist");

            }
            else if (err) {
                console.log(err)
            } else {
              window.alert("Sign up succeed")
              window.location.href="login.html";



            }

        } )



    })

}
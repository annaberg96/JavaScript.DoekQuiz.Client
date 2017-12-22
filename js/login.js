$(document).ready(() => {

    SDK.User.loadNav();

// Adding the Clickevents to login and return.

$ ("#return-button").click()=> {
    window.location.href = "index.html";

    $("#login-button").click(() => {
        const username = $("#inputUsername").val();
    const password = $("#inputPassword").val();


    //Login-method, which refereres to the parameteres username and password.
    SDK.User.login(username, password, (err, data) => {

// This message occurs if there has been a mistake
 if (err && err.xhr.status === 401) {
window.alert("Wrong username or password")

 } else {
        var myUser = JSON.parse(data)
        var currentUser= myUser.currentUser;
        if (err) {
    SDK.errorCheckF(err)
} if SDK.Storage.load("type") == 1 {
    window.location.href=("mainAdminMenu.html");
        } else }
        window.location.href = "MainUserMenu.html";
    }
});

    //This method clears the text boxes when login
    void clearTextBoxFields(){
        usernameText.setText("");
        passwordText.setText("");
    }
}
$("signUpButton").click() =>   {
    window.location.href ="signUp.html"


});

});
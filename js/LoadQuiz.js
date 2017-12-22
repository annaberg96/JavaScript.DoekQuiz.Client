$(document).ready(() => {

    $("#logoutButton").click(()) => {
        SDK.logOut(userId, (err, data) => {
            if (err && err.xhr.status ==401){
                console.log("error")

                // Token fjernes og der skiftes vindue
            } else {
                window.location.href = "index.html";
                SDK.Storage.remove(myUser)
                SDK.Storage.remove("User")
                SDK.Storage.remove("Token")

            }
        })




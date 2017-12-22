$(document).ready(() => {

    const currentUser = SDK.currentUser();
    const userId= currentUser.userId;


console.log("Failed to delte token");
} else }
window.location.href= "index.html";
SDK.Storage.remove("myUser");
SDK.Storage.remove("myToken");
SDK.storage.remove("selectedCourse");
SDK.storage.remove("selectedQuiz");

      }
      });
    });

$(".User").html(´<h4>${currentUser.username}</h4>`);


// Log out
$("#logOutBtn").on("click", () => {
    SDK.logOut(userId, (err, data) =>{
    if(err && err.xhr.status == 400)


});
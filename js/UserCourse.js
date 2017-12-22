// Stor inspiration fra Christoffer Buur
//Kilde https://github.com/Christofferbuur/Client/blob/master/js/courseView.js

$(document).ready(() => {

 //SDK request for loading courses
 SDK.loadCourses((err, data) =>{
 if (err) throw err;
 const courses = JSON.parse(course);

 $("#tablehead").append("<thead">)\n" +
    "<th><h1> Vælg fag!<h1/>/th\>n"+ "" +
    "<th></th>/n"  +" </thead>"
var courses= JSON.parse(course);

// Each loop should print all courses
$.each(courses, function (i)){
var tr = '<tr>';
tr += '<td> <button class="courseButton btn btn-primary pull-left" data-key=" + (i+1) +
    ">Vælg fag!</button></td>';
        tr += '</tr>';
// refers to table to courseTableBody
 $courseTableBody.append(tr);
});

//listener button from tables
$('.courseBtn').on("click", function () {
// v

 var name = $(this).closest("tr").find("td:eq(0)").text();
 window.location.href= "Quiz.html";

// Seves courses in SDK
}
for (var= i=0; i <courses.length;i ++){
 if (title == courses[i].courseTitle){
 SDK.Storage.persist("selectedCourse", courses[i])
 }
}
});

//Create quiz option
const user= SDK.currentUser();
console.log(user.type)
if (user.type ==2){
 $('#createQuiz').hide();
}

});
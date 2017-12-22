$(document).ready(() => {
  // Load quiz object
  const chosenQuiz = SDK.Storage.load("chosenQuiz");
  var $optionTableBody = $("optionTableBody");


//request to load courses
SDK.loadCourses((err, courseTochoose) => {
if (err) throw err;
var courses = JSON.parse(courseTochoose)

$.each(courses, function (i){
var option ='<option>';
option += '<a href="#>' + courses[i].courseTitle+'</a>';
option += </option>';
    $selectCourse.append(option);

})
})



  // Show all information about the quiz
 $(".page-header").html('<h1 align= "center">${chosenQuiz.quizTitle}</h1>');
 $(".description").html('<h2 algin= "center">${chosenQuiz.courseTitle}</h2>h2>');
})

// Create new quiz
SDK.createQuiz(createdBy, questionCount, quizTitle, quizDescription, courseId, (err, newQuiz) =>{
if (err && err.xhr.status ==400){

}
else if (err){
console.log("Error")

} else {
$("#quizDescription").val('');
$("#quizTitle").val('');
$("#sell").val($("#sell option:first").val());

// Show questions
 $('#questionModal').modal('show');

// Set modal as a question number
var i=1;
$("modal-title").html(´<h1>Questions ${i}</h1>`);

// add question button
var questionCounter= 0;
$("#addQuestionButton").click(()

//save infomation
const createdQuestion = $("#question").val();
const questionToQuizId = newQuiz.quizId;

// SDK request to create question
SDK.createQuestion(createdQuestion,questionToQuizId, (err,newQuestion) => {
if (err && err.xhr.status ==400){
    $(."form-group").addClass("Error");
    }
    else if (err) {
        console.log("error")

    } else }
   $("#question").val("");

$(".modal-title").html(´<h1> Question ${++i}</h1>`);
$(".question-added").html(`<h2> id= "text">Question is now added</h2>h2>`);

// Save information
  const optionToQuestionId = newQuestion.questionId;
  const correct = $("#correct").val();
  const wrong1= $("#wrong1").val();
  const wrong2= $("#wrong2").val();
  const wrong3= $("#wrong3").val();

  // if the question is correct
var isCorrect = 1;
SDK.createOption(correct, OptionToQuestionId, isCorrect, (err, data) => {
if (err && err.xhr.status ==400)
    {
        $(".form-group").addClass("Client error");
    }
    else if (err) {
        console.log(error)
    } else }
    // reset input
    $("#correct").val("")

    var isCorrect =0;
SDK.createOption(wrong1, optionToQuestionId, isCorrect,(err, data) =>  {
 if(err && err.xhr.statur== 400) {
    $(".form-group").addClass("Client error");
    }
    else if(err) {
        console.log("Error")
    } else }
    $("#wrong1").val("");

SDK.createOption(wrong2, optionToQuestionId, isCorrect, (err, data) => {
   if (err && err.xhr.status == 400){
   $(".form-group").addClass("Client error");
   }
   else if (err) {
        console.log("Error")
    } else }
    $("#wrong2").val("");

SDK.createOption(wrong3, OptionToQuestionId, isCorrect, (err, data) =>
if (err && err.xhr.status == 400) {
    $(".form-group").addClass("Client error");
}
else if (err) {
    console.log("error");
} else }
$(".#wrong3").val("");



    }

})

    }

    }
)



    }


// Display intitial question
 displayNext();

// Add click handler for "next" button
$('#next').on('click', function (e){
   e.preventDefault();
})
// Click handler for the 'Start over' button
 $('#start').on('click', function (e){
   e.preventDefault();


 })

})



}))
}


})





  });
} else {
 // save the questions
 let questionTitle =[];
 for ( var 1 = 0; i < loadedQuestions.length; i++){
  question.Title.push(loadedQuestions[i].questions);
     
    }





 })



}
function u_name() {
    var uname = welcome_form.name.value;
    if (uname == " ") {
        welcome_form.name.value = "";
    }
}
var questions = [
    {
        id: 1,
        question: "What is the full form of RAM",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Accept Memory",
            "None of these"
        ]
    },


    {
        id: 2,
        question: "What is the full form of CPU",
        answer: "Central Processing Unit",
        options: [
            "Central Program Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None of these"
        ]
    },

    {
        id: 3,
        question: "What is the full form of E-mail",
        answer: "Electronic Mail",
        options: [
            "Electronic Mail",
            "Electric Mail",
            "Engine Mail",
            "None of these"
        ]
    },

    {
        id: 4,
        question: "How do you create a function in JavaScript?",
        answer: "function myFunction()",
        options: [
            "function:myFunction()",
            "function = myFunction()",
            "function myFunction()",
            "None of these"
        ]
    },
    {
        id: 5,
        question: "How can you add a single line comment in a JavaScript?",
        answer: "comment //",
        options: [
            "/*-- comment --*/",
            "comment //",
            "comment [ ]",
            "None of these"
        ]
    },
];

function submitForm(e) {
    e.preventDefault();
    var name = document.forms["welcome_form"]["name"].value
    sessionStorage.setItem("name", name);
    location.href = "quiz.html";
}
var question_count = 0;
var point = 0;
var wrong = 0;
var correct = 0;
function next() {
    let user_answer = document.querySelector("li.option.active").innerHTML;
    if (user_answer == questions[question_count].answer) {
        point += 10;
        correct++;
        sessionStorage.setItem("correct", correct);
        sessionStorage.setItem("points", point)
    }
    else {
        wrong++;
        sessionStorage.setItem("wrong", wrong);
    }

    if (question_count == questions.length - 1) {
        location.href = "end.html";
        return;
    }

    question_count++;
    show(question_count);
}
function show(e) {
    document.querySelector(".name").innerHTML = sessionStorage.getItem("name");
    var question = document.getElementById("qusetion");
    question.innerHTML = `<h2> Q${question_count + 1}.${questions[e].question} </h2>
        <ul class="option_group">
            <li class="option">${questions[e].options[0]}</li>
            <li class="option">${questions[e].options[1]}</li>
            <li class="option">${questions[e].options[2]}</li>
            <li class="option">${questions[e].options[3]}</li>

       </ul >`;

    toggleActive()
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

//  User Information
function result() {
    var msg = "";
    var name = sessionStorage.getItem("name");
    var points = sessionStorage.getItem("points");
    var corrects = sessionStorage.getItem("correct");
    var wrongs = sessionStorage.getItem("wrong");
    if (corrects > wrongs) {
        msg = "Well Done! ";
    }
    else {
        msg = "Try Again! "
    }
    document.querySelector(".name").innerHTML = msg + name;
    document.querySelector(".points").innerHTML = points;
    document.querySelector(".correct").innerHTML = corrects;
    document.querySelector(".wrong").innerHTML = wrongs;
}



//Question related declarations
var category = new Array(4);
var questions = new Map();
var answers = new Map();
var choices = new Map();

category = ["Marvel", "Math", "Football", "Science"];

//first category IDs [11, 21, 31, 41] - Marvel
questions.set("11", "What is the real name of Iron Man?");
answers.set("11", "Tony Stark");
questions.set("21", "Which infinity stone is located in Vision's forehead?");
answers.set("21", "Mind Stone");
questions.set("31", "What is the name of Thor's hammer?");
answers.set("31", "Mjolnir");
questions.set("41", "Who is the father of Loki in the MCU?");
answers.set("41", "Laufey");

//second category IDs [12, 22, 32, 42] - Math
questions.set("12", "What is 15 + 27?");
answers.set("12", "42");
questions.set("22", "What is 8 × 7?");
answers.set("22", "56");
questions.set("32", "What is the square root of 144?");
answers.set("32", "12");
questions.set("42", "What is the value of π (pi) to 4 decimal places?");
answers.set("42", "3.1415");

//third category IDs [13, 23, 33, 43] - Football
questions.set("13", "Who is shown in this image?");
answers.set("13", "Lionel Messi");
questions.set("23", "How many players are on a football team on the field at once?");
answers.set("23", "11");
questions.set("33", "What is the maximum number of substitutions allowed in a football match?");
answers.set("33", "5");
questions.set("43", "What is the duration of a standard football match?");
answers.set("43", "90 minutes + extra time");

//fourth category IDs [14, 24, 34, 44] - Science
questions.set("14", "What is the chemical symbol for water?");
answers.set("14", "H2O");
questions.set("24", "What is the atomic number of carbon?");
answers.set("24", "6");
questions.set("34", "What is the speed of light in vacuum?");
answers.set("34", "299,792,458 m/s");
questions.set("44", "What is the largest planet in our solar system?");
answers.set("44", "Jupiter");

//choices for each question for the wild card
//first category - Marvel:
choices.set("11", "<p>A) Tony Stark</p><p>B) Steve Rogers</p><p>C) Bruce Banner</p><p>D) Peter Parker</p>");
choices.set("21", "<p>A) Power Stone</p><p>B) Mind Stone</p><p>C) Time Stone</p><p>D) Reality Stone</p>");
choices.set("31", "<p>A) Stormbreaker</p><p>B) Mjolnir</p><p>C) Gungnir</p><p>D) Hofund</p>");
choices.set("41", "<p>A) Odin</p><p>B) Laufey</p><p>C) Bor</p><p>D) Ymir</p>");

//second category - Math:
choices.set("12", "<p>A) 40</p><p>B) 42</p><p>C) 44</p><p>D) 46</p>");
choices.set("22", "<p>A) 54</p><p>B) 55</p><p>C) 56</p><p>D) 57</p>");
choices.set("32", "<p>A) 10</p><p>B) 11</p><p>C) 12</p><p>D) 13</p>");
choices.set("42", "<p>A) 3.1216</p><p>B) 3.1416</p><p>C) 3.1415</p><p>D) 3.1514</p>");

//third category - Football:
choices.set("13", "<p>A) Cristiano Ronaldo</p><p>B) Lionel Messi</p><p>C) Neymar</p><p>D) Kylian Mbappe</p>");
choices.set("23", "<p>A) 10</p><p>B) 11</p><p>C) 12</p><p>D) 13</p>");
choices.set("33", "<p>A) 3</p><p>B) 4</p><p>C) 5</p><p>D) 6</p>");
choices.set("43", "<p>A) 80 minutes + extra time</p><p>B) 85 minutes + extra time</p><p>C) 90 minutes + extra time</p><p>D) 95 minutes + extra time</p>");

//fourth category - Science:
choices.set("14", "<p>A) H2O</p><p>B) CO2</p><p>C) NaCl</p><p>D) O2</p>");
choices.set("34", "<p>A) 5</p><p>B) 6</p><p>C) 7</p><p>D) 8</p>");
choices.set("24", "<p>A) 299,792,458 m/s</p><p>B) 300,000,000 m/s</p><p>C) 299,792,459 m/s</p><p>D) 299,792,457 m/s</p>");
choices.set("44", "<p>A) Saturn</p><p>B) Jupiter</p><p>C) Neptune</p><p>D) Uranus</p>");

var isDouble = false;

// used once at the beginning of each game (from the home or winner pages.)
// takes teams names, and resets everything.
function start() { 

    //randomize a question index to be worth double points
    var d1 = Math.floor(1 + Math.random() * 4);
    var d2 = Math.floor(1 + Math.random() * 4);
    sessionStorage.setItem("double_q_id", d1 + "" + d2);
    isDouble = false;

    //reseting the wildcards usage status
    sessionStorage.setItem("team1_phone", 1);
    sessionStorage.setItem("team1_2answers", 1);
    sessionStorage.setItem("team1_choices", 1);
    sessionStorage.setItem("team2_phone", 1);
    sessionStorage.setItem("team2_2answers", 1);
    sessionStorage.setItem("team2_choices", 1);

    window.alert("Great! Let's start...");

    //taking team 1 name and intilizing their points to 0
    var team_1_name = window.prompt("Please enter the name of the first team:\n (If left empty, it will be named Team 1)", "Team 1");
    sessionStorage.setItem("F_team_N", team_1_name);
    sessionStorage.setItem("F_team_P", 0);

    //taking team 2 name and intilizing their points to 0
    var team_2_name = window.prompt("Please enter the name of the second team:\n (If left empty, it will be named Team 2)", "Team 2");
    sessionStorage.setItem("S_team_N", team_2_name);
    sessionStorage.setItem("S_team_P", 0);

    window.alert("Info: The double points question is: " + sessionStorage.getItem("double_q_id"));

    //setting the current team turn
    sessionStorage.setItem("currentTurn", team_1_name);
    sessionStorage.setItem("booleanTurn", 1);

    //error handling, just in case
    if (team_1_name == null) {
        sessionStorage.setItem("F_team_N", "Team 1");
    }

    if (team_2_name == null) {
        sessionStorage.setItem("S_team_N", "Team 2");
    }

    //reseting the links from the previous game
    for (var i = 1; i <= 4; i++) {
        for (var j = 1; j <= 4; j++) {
            if (sessionStorage.getItem(i + "" + j) == "<img src=\"Images/X.png\" width=\"25%\"hieght=\"25%\">") {
                sessionStorage.setItem(i + "" + j, "d");
            }
        }
    }
}

//used everytime a question is selected to pass the question index to the needed functions. (in the trivia.html file)
function set_Qid(linkid) { 
    sessionStorage.setItem("currentQ", linkid);
}

//used to make sure that each questions can be selected only once (in the trivia.html file)
function removeLink(linkid) {
    var elem = document.getElementById(linkid);
    sessionStorage.setItem(linkid, "<img src=\"Images/X.png\" width=\"25%\"hieght=\"25%\">")
    elem.innerHTML = "<img src=\"Images/X.png\" width=\"25%\"hieght=\"25%\">";

}

function update_info() {
    //to state the current turn team.
    var turn = document.getElementById("turn");
    turn.innerHTML = "<p>It's " + sessionStorage.getItem("currentTurn") + "'s turn</p>";

    //answer div related declarations
    var t1 = document.getElementById("t1");
    var t2 = document.getElementById("t2");
    var no = document.getElementById("no");

    t1.innerHTML = sessionStorage.getItem("F_team_N");
    t2.innerHTML = sessionStorage.getItem("S_team_N");
    no.innerHTML = " No one";

    //to print the question, will be explained accordingly.
    print_q();

    //to update the wildcards and keep track of whether they were used or not (for each team)
    update_wildcards();

    //to display the timer :D
    countDown();
}

//called every time a question is selected (by the question.html file) to display the question onto the page
function print_q() {
    var Qid = sessionStorage.getItem("currentQ");               //the set_Qid(linkid) function :D
    var id = parseInt(Qid);
    var c = id % 10;                                            //determines which category
    var p = parseInt(id / 10);                                  //determines which difficulty
    var cccategory; var pppoints;

    //getting elements by ids to modify innerHTML later
    var title = document.getElementById("title");               //the title of the page/tab (that appears in the top)
    var category = document.getElementById("category");
    var points = document.getElementById("points");
    var question = document.getElementById("QQ");
    var img = document.getElementById("img");
    var answer = document.getElementById("AA");
    var double_id = sessionStorage.getItem("double_q_id");

    switch (c) { //to set the category
        case 1:
            cccategory = "Marvel";
            break;

        case 2:
            cccategory = "Math";
            break;

        case 3:
            cccategory = "Football";
            break;
        case 4:
            cccategory = "Science";
            break;
    }

    switch (p) {    //to set the points
        case 1:
            pppoints = "for 10 points";
            break;

        case 2:
            pppoints = "for 20 points";
            break;

        case 3:
            pppoints = "for 30 points";
            break;
        case 4:
            pppoints = "for 40 points";
            break;
    }

    //setting everything
    title.innerHTML = cccategory + " Q" + p;
    category.innerHTML = cccategory;
    points.innerHTML = pppoints
    question.innerHTML = questions.get(Qid);
    answer.innerHTML = answers.get(Qid);

    //write if the question is the double points question
    //if not, do nothing
    if (double_id == Qid) {
        points.innerHTML += "<p style=\"font-size: 0.8em \">Congratulations!! This is the double points question!</p>";
        isDouble = true;
    }

    //handling special cases where questions have images
    switch (id) {
        case 13:
            img.setAttribute("alt", "Lionel Messi");
            img.setAttribute("src", "Images/questions photos/Messi.webp");
            break;

        case 11:
            img.setAttribute("alt", "Iron Man scene");
            img.setAttribute("src", "Images/questions photos/scene-Iron-Man.webp");
            break;

    }

}

//to update the wildcards and keep track of whether they were used or not (for each team)
//called everytime a question is selected
function update_wildcards() {

    var help = document.getElementById("help");
    var currentHTML = help.innerHTML;

    //variables that are set to 1 or 0 to keep track which wildcard is used or not
    //p for phone, c for choices, t for 2 (two) answers, and 2 for team 2
    var p = parseInt(sessionStorage.getItem("team1_phone"));
    var c = parseInt(sessionStorage.getItem("team1_choices"));
    var t = parseInt(sessionStorage.getItem("team1_2answers"));

    var p2 = parseInt(sessionStorage.getItem("team2_phone"));
    var c2 = parseInt(sessionStorage.getItem("team2_choices"));
    var t2 = parseInt(sessionStorage.getItem("team2_2answers"));

    //to simplify outputing the images:
    //the _used variables don't have the "onclick" attribute
    //phone wildcard
    var phone = "<img id=\"phone\" style=\"padding-left: 20px; padding-right: 40px;\" width=\"65\" height=\"50\" alt=\"phone\" src=\"Images/phone.png\" onclick=\"update_wild_space(1)\">";
    var phone_used = "<img style=\"padding-left: 20px; padding-right: 40px;\" width=\"65\" height=\"50\" alt=\"grey phone\" src=\"Images/phone_g.png\">";

    //choices wildcard (choices_img to avoid any possible conflict with the choices map)
    var choices_img = "<img id=\"choices_img\" style=\"padding-left: 10px; padding-right: 40px;\" width=\"65\" height=\"50\" alt=\"blocks\" src=\"Images/ABC.png\" onclick=\"update_wild_space(2)\">"
    var choices_used = "<img style=\"padding-left: 10px; padding-right: 40px;\" width=\"65\" height=\"50\" alt=\"grey blocks\" src=\"Images/ABC_g.png\">"

    //2answers wildcard
    var _2answers = "<img id=\"_2answers\" style=\"padding-left: 10px; padding-right: 40px;\" width=\"65\" height=\"50\" alt=\"peace sign\" src=\"Images/hand.png\" onclick=\"update_wild_space(3)\">"
    var _2answers_used = "<img style=\"padding-left: 10px; padding-right: 40px;\" width=\"65\" height=\"50\" alt=\"grey peace sign\" src=\"Images/hand_g.png\">"

    //handling all possible combinations for team 1
    if (parseInt(sessionStorage.getItem("booleanTurn"))) { //if true, it's team 1 turn
        if (p) {
            if (c) {
                if (t) {
                    help.innerHTML = phone + choices_img + _2answers + currentHTML;
                }

                else {
                    help.innerHTML = phone + choices_img + _2answers_used + currentHTML;
                }
            }

            else {
                if (t) {
                    help.innerHTML = phone + choices_used + _2answers + currentHTML;
                }

                else {
                    help.innerHTML = phone + choices_used + _2answers_used + currentHTML;
                }
            }
        }

        else {
            if (c) {
                if (t) {
                    help.innerHTML = phone_used + choices_img + _2answers + currentHTML;
                }

                else {
                    help.innerHTML = phone_used + choices_img + _2answers_used + currentHTML;
                }
            }

            else {
                if (t) {
                    help.innerHTML = phone_used + choices_used + _2answers + currentHTML;
                }

                else {
                    help.innerHTML = phone_used + choices_used + _2answers_used + currentHTML;
                }
            }
        }
    }

    //handling all possible combinations for team 2
    else {
        if (p2) {
            if (c2) {
                if (t2) {
                    help.innerHTML = phone + choices_img + _2answers + currentHTML;
                }

                else {
                    help.innerHTML = phone + choices_img + _2answers_used + currentHTML;
                }
            }

            else {
                if (t2) {
                    help.innerHTML = phone + choices_used + _2answers + currentHTML;
                }

                else {
                    help.innerHTML = phone + choices_used + _2answers_used + currentHTML;
                }
            }
        }

        else {
            if (c2) {
                if (t2) {
                    help.innerHTML = phone_used + choices_img + _2answers + currentHTML;
                }

                else {
                    help.innerHTML = phone_used + choices_img + _2answers_used + currentHTML;
                }
            }

            else {
                if (t2) {
                    help.innerHTML = phone_used + choices_used + _2answers + currentHTML;
                }

                else {
                    help.innerHTML = phone_used + choices_used + _2answers_used + currentHTML;
                }
            }
        }
    }
}

//to display a timer (a code taken from the internet, modified at the "//" lines)
function countDown() {
    var timer_div = document.getElementById("timer");//
    var count = 60;
    timer_div.innerHTML = "<p>01:00</p>";//
    const timer = setInterval(function () {
        count--;
        timer_div.innerHTML = "<p>00:" + count + "</p>";//
        if (count === 0) {
            clearInterval(timer);
            timer_div.innerHTML += ("<p>Time's up!</p>");
           //add the function to show the answer
           show_answer();
        }
    }, 1000);
}

//to show the correct answer, either at finishing the timer or by choice of the player
function show_answer() {
    var answer = document.getElementById("answer");
    answer.style.display = "block";

    //switch the turns
    if (parseInt(sessionStorage.getItem("booleanTurn"))) {
        sessionStorage.setItem("booleanTurn", 0);
        sessionStorage.setItem("currentTurn", sessionStorage.getItem("S_team_N"));
    }
    else {
        sessionStorage.setItem("booleanTurn", 1);
        sessionStorage.setItem("currentTurn", sessionStorage.getItem("F_team_N"));
    }
}

//to update the page whenever a wildcard is selected
function update_wild_space(x) {
    var space = document.getElementById("wild_space");
    var phone = document.getElementById("phone");
    var choices_img = document.getElementById("choices_img");
    var _2answers = document.getElementById("_2answers");

    switch (x) {
        case 1:
            if (parseInt(sessionStorage.getItem("booleanTurn"))) {
                sessionStorage.setItem("team1_phone", 0);

                //to make sure the players don't get to chose multiple wildcards in one turn
                if (parseInt(sessionStorage.getItem("team1_choices"))) {
                    choices_img.setAttribute("onclick", "");
                }

                if (parseInt(sessionStorage.getItem("team1_2answers"))) {
                    _2answers.setAttribute("onclick", "");
                }
            }

            else {
                sessionStorage.setItem("team2_phone", 0);

                if (parseInt(sessionStorage.getItem("team2_choices"))) {
                    choices_img.setAttribute("onclick", "");
                }

                if (parseInt(sessionStorage.getItem("team2_2answers"))) {
                    _2answers.setAttribute("onclick", "");
                }
            }

            space.innerHTML = "<p>You can call a friend</p>";
            break;

        case 2:
            if (parseInt(sessionStorage.getItem("booleanTurn"))) {
                sessionStorage.setItem("team1_choices", 0);

                if (parseInt(sessionStorage.getItem("team1_phone"))) {
                    phone.setAttribute("onclick", "");
                }

                if (parseInt(sessionStorage.getItem("team1_2answers"))) {
                    _2answers.setAttribute("onclick", "");
                }
            }

            else {
                sessionStorage.setItem("team2_choices", 0);

                if (parseInt(sessionStorage.getItem("team2_phone"))) {
                    phone.setAttribute("onclick", "");
                }

                if (parseInt(sessionStorage.getItem("team2_2answers"))) {
                    _2answers.setAttribute("onclick", "");
                }
            }
            
            //to display the choices
            space.innerHTML = "<p>You can choose one of the following:</p>" + choices.get(sessionStorage.getItem("currentQ"));
            break;

        case 3:
            if (parseInt(sessionStorage.getItem("booleanTurn"))) {
                sessionStorage.setItem("team1_2answers", 0);

                if (parseInt(sessionStorage.getItem("team1_choices"))) {
                    choices_img.setAttribute("onclick", "");
                }

                if (parseInt(sessionStorage.getItem("team1_phone"))) {
                    phone.setAttribute("onclick", "");
                }
            }

            else {
                sessionStorage.setItem("team2_2answers", 0);

                if (parseInt(sessionStorage.getItem("team2_choices"))) {
                    choices_img.setAttribute("onclick", "");
                }

                if (parseInt(sessionStorage.getItem("team2_phone"))) {
                    phone.setAttribute("onclick", "");
                }
            }

            space.innerHTML = "<p>You can answer with two different answers</p>";
            break
    }
}

//to update the score each time a question is answered
function update_score() {
    var Qid = sessionStorage.getItem("currentQ");
    var id = parseInt(Qid);
    var team1 = document.getElementById("team1");
    var team2 = document.getElementById("team2");

    //parseInt() to ensure arithmatic operations could be done
    var t1_p = parseInt(sessionStorage.getItem("F_team_P"));
    var t2_p = parseInt(sessionStorage.getItem("S_team_P"));

    //for each difficulty checks if it is the double question first before adding points
    switch (parseInt(id / 10)) {
        case 1:
            if (isDouble) {
                if (team1.checked) {
                    t1_p += 10 * 2;
                    sessionStorage.setItem("F_team_P", t1_p);
                    isDouble = false;
                }

                else if (team2.checked) {
                    t2_p += 10 * 2;
                    sessionStorage.setItem("S_team_P", t2_p);
                    isDouble = false;
                }

            }

            else {
                if (team1.checked) {
                    t1_p += 10;
                    sessionStorage.setItem("F_team_P", t1_p);
                    isDouble = false;
                }

                else if (team2.checked) {
                    t2_p += 10;
                    sessionStorage.setItem("S_team_P", t2_p);
                    isDouble = false;
                }
            }
            break;

        case 2:
            if (isDouble) {
                if (team1.checked) {
                    t1_p += 20 * 2;
                    sessionStorage.setItem("F_team_P", t1_p);
                    isDouble = false;
                }

                else if (team2.checked) {
                    t2_p += 20 * 2;
                    sessionStorage.setItem("S_team_P", t2_p);
                    isDouble = false;
                }

            }

            else {
                if (team1.checked) {
                    t1_p += 20;
                    sessionStorage.setItem("F_team_P", t1_p);
                    isDouble = false;
                }

                else if (team2.checked) {
                    t2_p += 20;
                    sessionStorage.setItem("S_team_P", t2_p);
                    isDouble = false;
                }
            }
            break;

        case 3:
            if (isDouble) {
                if (team1.checked) {
                    t1_p += 30 * 2;
                    sessionStorage.setItem("F_team_P", t1_p);
                    isDouble = false;
                }

                else if (team2.checked) {
                    t2_p += 30 * 2;
                    sessionStorage.setItem("S_team_P", t2_p);
                    isDouble = false;
                }

            }

            else {
                if (team1.checked) {
                    t1_p += 30;
                    sessionStorage.setItem("F_team_P", t1_p);
                    isDouble = false;
                }

                else if (team2.checked) {
                    t2_p += 30;
                    sessionStorage.setItem("S_team_P", t2_p);
                    isDouble = false;
                }
            }
            break;
        case 4:
            if (isDouble) {
                if (team1.checked) {
                    t1_p += 40 * 2;
                    sessionStorage.setItem("F_team_P", t1_p);
                    isDouble = false;
                }

                else if (team2.checked) {
                    t2_p += 40 * 2;
                    sessionStorage.setItem("S_team_P", t2_p);
                    isDouble = false;
                }
            }

            else {
                if (team1.checked) {
                    t1_p += 40;
                    sessionStorage.setItem("F_team_P", t1_p);
                    isDouble = false;
                }

                else if (team2.checked) {
                    t2_p += 40;
                    sessionStorage.setItem("S_team_P", t2_p);
                    isDouble = false;
                }
            }
            break;
    }

    //to go back to the questions grid
    location.href = "trivia.html";
}

//to update points everytime the grid is loaded
function update_points() {
    var turn = document.getElementById("turn");
    var team1 = document.getElementById("team1");
    var team2 = document.getElementById("team2");
    turn.innerHTML = "<p>It's team " + sessionStorage.getItem("currentTurn") + " turn";
    team1.innerHTML = "<p> " + sessionStorage.getItem("F_team_N") + ": </p><p> " + sessionStorage.getItem("F_team_P") + "</p>";
    team2.innerHTML = "<p> " + sessionStorage.getItem("S_team_N") + ": </p><p> " + sessionStorage.getItem("S_team_P") + "</p>";

    //to update the "x.png" image and make the already-selected questions unclickable 
    for (var i = 1; i <= 4; i++) {
        for (var j = 1; j <= 4; j++) {
            if (sessionStorage.getItem(i + "" + j) == "<img src=\"Images/X.png\" width=\"25%\"hieght=\"25%\">") {
                document.getElementById(i + "" + j).innerHTML = sessionStorage.getItem(i + "" + j);
                document.getElementById(i + "" + j).href = '#';
            }
        }
    }

}

//to end the game, whenever
function end_game() {
    var t1_p = parseInt(sessionStorage.getItem("F_team_P"));
    var t2_p = parseInt(sessionStorage.getItem("S_team_P"));
    var team1 = sessionStorage.getItem("F_team_N");
    var team2 = sessionStorage.getItem("S_team_N");

    winner = document.getElementById("winner");

    //display the winner and both teams' points, handle draw case
    if (t1_p == t2_p) {
        winner.innerHTML = "<p> The game ended in a draw</p>";
    }

    else {
        if (t1_p > t2_p) {
            winner.innerHTML = "<p> The winner is: </p> <p> " + team1 + "! </p>";
        }

        else {
            winner.innerHTML = "<p> The winner is: </p> <p> " + team2 + "! </p>";
        }
    }

    winner.innerHTML += "<p> " + team1 + " = " + t1_p + "</p>";
    winner.innerHTML += "<p> " + team2 + " = " + t2_p + "</p>";

}

//for the contact.html file
//to show the email input field when selected
function show_email() {
    document.getElementById("MOC_out").innerHTML = "Email: ";
    document.getElementById("MOC_in").style.display = "inline";
}

//to show the phone number input field when selected
function show_phone() {
    document.getElementById("MOC_out").innerHTML = "Phone Number: ";
    document.getElementById("MOC_in").style.display = "inline";
}
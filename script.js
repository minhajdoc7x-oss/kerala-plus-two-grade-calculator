function login() {
    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();

    if(user.toLowerCase() === "admin" && pass === "1234") {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("mainPage").style.display = "block";
    } else {
        alert("Wrong Username or Password!");
    }
}

function calculate() {
    let subject = document.getElementById("subject").value;
    let p1ce = parseInt(document.getElementById("p1ce").value) || 0;
    let p1te = parseInt(document.getElementById("p1te").value) || 0;
    let p2ce = parseInt(document.getElementById("p2ce").value) || 0;
    let p2te = parseInt(document.getElementById("p2te").value) || 0;
    let p2pe = parseInt(document.getElementById("p2pe").value) || 0;

    let total = p1ce + p1te + p2ce + p2te + p2pe;

    let grade = "";
    let gradeClass = "";

    if (total >= 180) { grade = "A+"; gradeClass = "Aplus"; }
    else if (total >= 160) { grade = "A"; gradeClass = "A"; }
    else if (total >= 140) { grade = "B+"; gradeClass = "Bplus"; }
    else if (total >= 120) { grade = "B"; gradeClass = "B"; }
    else if (total >= 100) { grade = "C+"; gradeClass = "Cplus"; }
    else if (total >= 80) { grade = "C"; gradeClass = "C"; }
    else if (total >= 60) { grade = "D+"; gradeClass = "Dplus"; }
    else if (total >= 40) { grade = "D"; gradeClass = "D"; }
    else { grade = "E"; gradeClass = "E"; }

    document.getElementById("gradeSound").play();

    document.getElementById("output").innerHTML =
        "<h3>Subject: " + subject + "</h3>" +
        "<h3>Total Marks: " + total + " / 200</h3>" +
        "<div class='grade-box " + gradeClass + "'>GRADE: " + grade + "</div>";
}

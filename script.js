function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "admin" && pass === "1234") {
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
    let confettiColor = ["#ffffff"];

    if (total >= 180) { 
        grade = "A+"; 
        gradeClass = "Aplus"; 
        confettiColor = ["#FFD700", "#FFA500", "#FF0000"]; // gold celebration
    }
    else if (total >= 160) { 
        grade = "A"; 
        gradeClass = "A"; 
        confettiColor = ["#2196F3", "#00BCD4"];
    }
    else if (total >= 140) { 
        grade = "B+"; 
        gradeClass = "Bplus"; 
    }
    else if (total >= 120) { 
        grade = "B"; 
        gradeClass = "B"; 
    }
    else if (total >= 100) { 
        grade = "C+"; 
        gradeClass = "Cplus"; 
    }
    else if (total >= 80) { 
        grade = "C"; 
        gradeClass = "C"; 
    }
    else if (total >= 60) { 
        grade = "D+"; 
        gradeClass = "Dplus"; 
    }
    else if (total >= 40) { 
        grade = "D"; 
        gradeClass = "D"; 
    }
    else { 
        grade = "E"; 
        gradeClass = "E"; 
        confettiColor = ["#ff0000"];
    }

    // Play Sound
    document.getElementById("gradeSound").play();

    // Show Result
    document.getElementById("output").innerHTML =
        "<h3>Subject: " + subject + "</h3>" +
        "<h3>Total Marks: " + total + " / 200</h3>" +
       "<div class='grade-box " + gradeClass + "'>GRADE: " + grade + "</div>";

   // 🎉 Confetti on Grade Box Only
const gradeBox = document.querySelector(".grade-box");

if (gradeBox && typeof confetti === "function") {

    const rect = gradeBox.getBoundingClientRect();

    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { x: x, y: y },
        colors: confettiColor
    });

    // Extra blast for A+
    if (grade === "A+") {
        setTimeout(() => {
            confetti({
                particleCount: 250,
                spread: 100,
                origin: { x: x, y: y },
                colors: confettiColor
            });
        }, 300);
    }
}

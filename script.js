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

    if (total >= 180) { grade = "A+"; gradeClass = "Aplus"; }
    else if (total >= 160) { grade = "A"; gradeClass = "A"; }
    else if (total >= 140) { grade = "B+"; gradeClass = "Bplus"; }
    else if (total >= 120) { grade = "B"; gradeClass = "B"; }
    else if (total >= 100) { grade = "C+"; gradeClass = "Cplus"; }
    else if (total >= 80) { grade = "C"; gradeClass = "C"; }
    else if (total >= 60) { grade = "D+"; gradeClass = "Dplus"; }
    else if (total >= 40) { grade = "D"; gradeClass = "D"; }
    else { grade = "E"; gradeClass = "E"; }

    // Play sound
    document.getElementById("gradeSound").play();

    // Display Result
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML =
        "<h3>Subject: " + subject + "</h3>" +
        "<h3>Total Marks: " + total + " / 200</h3>" +
        "<div class='grade-box " + gradeClass + "'>GRADE: " + grade + "</div>";

    // AUTO-SCROLL
    outputDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // CONFETTI EFFECT
    if (grade !== "E") {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff0081', '#ff6a00', '#1cc88a', '#4e73df']
        });
    }
}

function clearFields() {
    document.getElementById("subject").value = "";
    document.getElementById("p1ce").value = "";
    document.getElementById("p1te").value = "";
    document.getElementById("p2ce").value = "";
    document.getElementById("p2te").value = "";
    document.getElementById("p2pe").value = "";
    document.getElementById("output").innerHTML = "";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- NEW: BUBBLY BUTTON ANIMATION TRIGGER ---
const animateButton = function(e) {
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(function(){
        e.target.classList.remove('animate');
    }, 700);
};

// Apply animation to all buttons with the bubbly-button class
const bubblyButtons = document.getElementsByClassName("bubbly-button");
for (let i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}

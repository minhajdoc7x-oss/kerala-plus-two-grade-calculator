function login() {
    const userInput = document.getElementById("username");
    const passInput = document.getElementById("password");

    if (!userInput || !passInput) return;

    const user = userInput.value.trim().toLowerCase();
    const pass = passInput.value.trim();

    // Login check
    if (user === "minhaj" && pass === "2812") {
        const loginPage = document.getElementById("loginPage");
        const mainPage = document.getElementById("mainPage");

        if (loginPage) loginPage.style.display = "none";
        if (mainPage) mainPage.style.display = "block";

        // Confetti (check if library exists)
        if (typeof confetti === "function") {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
            });
        }

    } else {
        alert("Wrong Username or Password!");
    }
}

function calculate() {
    const subject = document.getElementById("subject")?.value || "Unknown";

    const p1ce = parseInt(document.getElementById("p1ce")?.value) || 0;
    const p1te = parseInt(document.getElementById("p1te")?.value) || 0;
    const p2ce = parseInt(document.getElementById("p2ce")?.value) || 0;
    const p2te = parseInt(document.getElementById("p2te")?.value) || 0;
    const p2pe = parseInt(document.getElementById("p2pe")?.value) || 0;

    const total = p1ce + p1te + p2ce + p2te + p2pe;

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

    // Play sound safely
    const sound = document.getElementById("gradeSound");
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(() => {});
    }

    const output = document.getElementById("output");
    if (output) {
        output.innerHTML =
            `<h3>Subject: ${subject}</h3>
             <h3>Total Marks: ${total} / 200</h3>
             <div class="grade-box ${gradeClass}">GRADE: ${grade}</div>`;
    }

    // Celebrate high grades
    if ((grade === "A+" || grade === "A") && typeof confetti === "function") {
        confetti({
            particleCount: 200,
            spread: 100,
            origin: { y: 0.6 }
        });
    }
}

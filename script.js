<script>
/* ===== LOGIN FUNCTION ===== */
function login() {
    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();

    if (user.toLowerCase() === "minhaj" && pass === "2812") {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("mainPage").style.display = "block";
    } else {
        alert("Wrong Username or Password!");
    }
}

/* ===== CALCULATE FUNCTION ===== */
function calculate() {
    let subject = document.getElementById("subject").value.trim();

    let p1ce = parseInt(document.getElementById("p1ce").value) || 0;
    let p1te = parseInt(document.getElementById("p1te").value) || 0;
    let p2ce = parseInt(document.getElementById("p2ce").value) || 0;
    let p2te = parseInt(document.getElementById("p2te").value) || 0;
    let p2pe = parseInt(document.getElementById("p2pe").value) || 0;

    let total = p1ce + p1te + p2ce + p2te + p2pe;

    let grade = "";

    if (total >= 180) grade = "A+";
    else if (total >= 160) grade = "A";
    else if (total >= 140) grade = "B+";
    else if (total >= 120) grade = "B";
    else if (total >= 100) grade = "C+";
    else if (total >= 80) grade = "C";
    else if (total >= 60) grade = "D+";
    else if (total >= 40) grade = "D";
    else grade = "E";

    document.getElementById("output").innerHTML =
        "<h3>Subject: " + subject + "</h3>" +
        "<h3>Total Marks: " + total + " / 200</h3>" +
        "<h3>Grade: " + grade + "</h3>";
}
</script>

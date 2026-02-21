// LOGIN FUNCTION
function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if(username === "minhaj" && password === "2812") {
        document.getElementById('loginPage').style.display = "none";
        document.getElementById('mainPage').style.display = "block";
    } else {
        alert("Incorrect username or password!");
    }
}
// CALCULATOR FUNCTION
function calculate() {
    const p1ce = parseFloat(document.getElementById('p1ce').value) || 0;
    const p1te = parseFloat(document.getElementById('p1te').value) || 0;
    const p2ce = parseFloat(document.getElementById('p2ce').value) || 0;
    const p2te = parseFloat(document.getElementById('p2te').value) || 0;
    const p2pe = parseFloat(document.getElementById('p2pe').value) || 0;
    const subject = document.getElementById('subject').value || "Subject";

    const total = p1ce + p1te + p2ce + p2te + p2pe;

    // PLAY SOUND
    document.getElementById('gradeSound').play();

    document.getElementById('output').innerHTML = `
        <strong>${subject}</strong> Total Marks: ${total}
    `;
}

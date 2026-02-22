const batchData = {
    science: ["English", "Second Language", "Physics", "Chemistry", "Biology/CS", "Mathematics"],
    commerce: ["English", "Second Language", "Business Studies", "Economics", "Accountancy", "Comp App/Maths/Stat"],
    humanities: ["English", "Second Language", "History", "Economics", "Political Science", "Sociology"]
};

function updateSubjects() {
    const batch = document.getElementById('batchSelect').value;
    const container = document.getElementById('subjectInputs');
    container.innerHTML = "";

    if (batch === "") {
        container.innerHTML = "<p style='color: #666; margin-top: 15px;'>Please select your batch to start.</p>";
        return;
    }

    batchData[batch].forEach((sub, index) => {
        container.innerHTML += `<input type="number" id="sub${index}" placeholder="${sub} (Max 200)">`;
    });
}

function calculatePercentage() {
    const batch = document.getElementById('batchSelect').value;
    if (batch === "") {
        alert("Please choose a batch first!");
        return;
    }

    let totalMarks = 0;
    for (let i = 0; i < 6; i++) {
        let val = document.getElementById(`sub${i}`).value;
        totalMarks += parseFloat(val) || 0;
    }

    let percentage = (totalMarks / 1200) * 100;

    // --- ഇതാണ് നീ ചോദിച്ച ഇഫക്റ്റ് (Confetti) ---
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff0081', '#4e73df', '#1cc88a']
    });

    document.getElementById('result').innerHTML = `
        <div style="font-size: 18px; color: #333; margin-top:15px;">Total Score: ${totalMarks} / 1200</div>
        <div class="percent-display">${percentage.toFixed(2)}%</div>
    `;
}

function clearAll() {
    document.getElementById('batchSelect').value = "";
    document.getElementById('result').innerHTML = "";
    updateSubjects();
}

function generateResume() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let education = document.getElementById("education").value;
    let skills = document.getElementById("skills").value;
    let experience = document.getElementById("experience").value;
    let projects = document.getElementById("projects").value;
    let languages = document.getElementById("languages").value;
    let github = document.getElementById("github").value;
    let linkedin = document.getElementById("linkedin").value;
    let summary = document.getElementById("summary").value;
    let today = new Date().toLocaleDateString();
    let photo = document.getElementById("photo").files[0];
    let template = document.getElementById("template").value;

    let skillsList = skills.split(",");

    if (summary === "") {
        summary =
            "Motivated professional with skills in " +
            skills +
            ". Ready to learn and contribute to projects.";
    }

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        education === "" ||
        skills === "" ||
        experience === "" ||
        projects === "" ||
        languages === "" ||
        github === "" ||
        linkedin === ""
    ) {
        alert("Please fill all fields!");
        return;
    }

    let resume = document.getElementById("resume");

    // Remove previous template and dark-mode classes
    resume.className = "";

    // Apply selected template
    if (template === "classic") {
        resume.classList.add("classic");
    } 
    else if (template === "modern") {
        resume.classList.add("modern");
    } 
    else if (template === "professional") {
        resume.classList.add("professional");
    }

    let photoHTML = "";

    if (photo) {
        photoHTML = `
            <img 
                src="${URL.createObjectURL(photo)}"
                width="120"
                height="120"
                style="border-radius:50%;object-fit:cover;"
            >
        `;
    }

    resume.innerHTML = `
        <h2>My Resume</h2>
        <hr>

        ${photoHTML}

        <p>👤 <strong>Name:</strong> ${name}</p>

        <p>📧 <strong>Email:</strong> ${email}</p>

        <p>📞 <strong>Phone:</strong> ${phone}</p>

        <p>🎓 <strong>Education:</strong> ${education}</p>

        <p>💻 <strong>Skills:</strong></p>

        <ul>
            ${skillsList
                .map(skill => `<li>${skill.trim()}</li>`)
                .join("")}
        </ul>

        <p>💼 <strong>Experience:</strong> ${experience}</p>

        <p>📂 <strong>Projects:</strong></p>
        <p>${projects}</p>

        <p>🗣️ <strong>Languages:</strong></p>
        <p>${languages}</p>

        <p>🐙 <strong>GitHub:</strong></p>
        <p>
            <a href="${github}" target="_blank">
                ${github}
            </a>
        </p>

        <p>💼 <strong>LinkedIn:</strong></p>
        <p>
            <a href="${linkedin}" target="_blank">
                ${linkedin}
            </a>
        </p>

        <p><strong>Professional Summary:</strong></p>
        <p>${summary}</p>

        <p><strong>🎯 Career Objective:</strong></p>

        <p>
            To obtain a challenging position where I can apply my skills,
            learn continuously, and contribute to the organization's success.
        </p>

        <p>📅 <strong>Date:</strong> ${today}</p>
    `;
}


// Clear Form

function clearForm() {

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("education").value = "";
    document.getElementById("skills").value = "";
    document.getElementById("experience").value = "";
    document.getElementById("projects").value = "";
    document.getElementById("languages").value = "";
    document.getElementById("github").value = "";
    document.getElementById("linkedin").value = "";
    document.getElementById("summary").value = "";
    document.getElementById("photo").value = "";

    document.getElementById("resume").innerHTML = "";
    document.getElementById("resume").className = "";
}


// Download PDF

function downloadPDF() {
    window.print();
}


// AI Summary Generator

function generateAI() {

    let skills = document.getElementById("skills").value;
    let experience = document.getElementById("experience").value;

    let aiSummary = "";

    if (experience.toLowerCase() === "fresher") {

        aiSummary =
            "A motivated fresher with skills in " +
            skills +
            ". Eager to learn new technologies and contribute to professional projects.";

    } 
    else {

        aiSummary =
            "An experienced professional with expertise in " +
            skills +
            ". Skilled in problem solving and delivering quality results.";
    }

    document.getElementById("summary").value = aiSummary;
}


// Dark Mode

function darkMode() {

    let resume = document.getElementById("resume");

    resume.classList.toggle("dark");
}
// ===== Live Resume Preview =====

function updateLivePreview() {

    let preview = document.getElementById("livePreview");

    if (!preview) {
        return;
    }

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let education = document.getElementById("education").value;
    let skills = document.getElementById("skills").value;
    let experience = document.getElementById("experience").value;
    let projects = document.getElementById("projects").value;
    let languages = document.getElementById("languages").value;
    let github = document.getElementById("github").value;
    let linkedin = document.getElementById("linkedin").value;
    let summary = document.getElementById("summary").value;

    preview.innerHTML = `
        <h2>👀 Live Preview</h2>

        <h3>${name || "Your Name"}</h3>

        <p>📧 ${email || "Your Email"}</p>
        <p>📞 ${phone || "Your Phone"}</p>

        <h3>🎓 Education</h3>
        <p>${education || "Your Education"}</p>

        <h3>💻 Skills</h3>
        <p>${skills || "Your Skills"}</p>

        <h3>💼 Experience</h3>
        <p>${experience || "Your Experience"}</p>

        <h3>📂 Projects</h3>
        <p>${projects || "Your Projects"}</p>

        <h3>🗣️ Languages</h3>
        <p>${languages || "Your Languages"}</p>

        <h3>📝 Professional Summary</h3>
        <p>${summary || "Your Professional Summary"}</p>

        <h3>🔗 Profiles</h3>

        <p>
            🐙 GitHub:
            ${github || "Your GitHub Profile"}
        </p>

        <p>
            💼 LinkedIn:
            ${linkedin || "Your LinkedIn Profile"}
        </p>
    `;
}


// Update preview whenever the user types

document.addEventListener("input", function () {
    updateLivePreview();
});


// Show preview when the page loads

document.addEventListener("DOMContentLoaded", function () {
    updateLivePreview();
});
// ================================
// LIVE DATE
// ================================

function updateLiveDate() {
    const dateElement = document.getElementById("liveDate");

    if (!dateElement) return;

    const today = new Date();

    dateElement.textContent = today.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });
}


// ================================
// PREMIUM PLAN
// ================================

let selectedPremiumPlan = null;

function selectPlan(plan, price) {

    selectedPremiumPlan = {
        plan: plan,
        price: price
    };

    // Save selected plan
    localStorage.setItem(
        "resumeAiPremium",
        JSON.stringify(selectedPremiumPlan)
    );

    alert(
        "💎 ResumeAi Premium\n\n" +
        "Plan: " + plan + "\n" +
        "Price: ₹" + price + "\n\n" +
        "Premium plan selected successfully!"
    );
}


// ================================
// LOAD DATE + PREMIUM
// ================================

document.addEventListener("DOMContentLoaded", function () {

    updateLiveDate();

    // Check saved premium plan
    const savedPlan = localStorage.getItem("resumeAiPremium");

    if (savedPlan) {
        try {
            selectedPremiumPlan = JSON.parse(savedPlan);
        } catch (error) {
            selectedPremiumPlan = null;
        }
    }

});


// Update date every minute
setInterval(updateLiveDate, 60000);

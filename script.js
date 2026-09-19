async function generateStudyMaterial() {
    const inputText = document.getElementById('userInput').value.trim();
    if (!inputText) {
        alert("Please enter some text or topic first!");
        return;
    }

    // UI States update
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('outputSection').classList.add('hidden');

    try {
        // AI API Call (Using a fallback mock engine since you need a fast offline/online hybrid)
        // Aap yahan Gemini ya OpenAI API url bhi direct replace kar sakte hain
        setTimeout(() => {
            // Processing Fake AI generation based on input text for zero-config fast setup
            const summary = `Here is the structured breakdown of your topic:\n1. Core Concept: Focuses on maximizing understanding from raw data.\n2. Key Takeaway: Simplifies learning vectors.\n3. Application: Useful for quick revisions right before exams.`;
            
            const quizHTML = `
                <div class="quiz-item">
                    <p><strong>Q1: What is the main objective of this AI Companion?</strong></p>
                    <label><input type="radio" name="q1"> To write code</label><br>
                    <label><input type="radio" name="q1"> To simplify learning and test retention</label><br>
                </div>
                <div class="quiz-item">
                    <p><strong>Q2: Why is micro-learning effective?</strong></p>
                    <label><input type="radio" name="q2"> It saves time and prevents cognitive overload</label><br>
                    <label><input type="radio" name="q2"> It requires no internet</label><br>
                </div>
            `;

            // Display Results
            document.getElementById('summaryText').innerText = summary;
            document.getElementById('quizContainer').innerHTML = quizHTML;
            
            document.getElementById('loading').classList.add('hidden');
            document.getElementById('outputSection').classList.remove('hidden');
        }, 1500); // 1.5 seconds loading simulation

    } catch (error) {
        alert("Something went wrong. Please try again.");
        document.getElementById('loading').classList.add('hidden');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");

    hamburger.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        mainContent.classList.toggle("shift");
    });

    // Navigation Click Events
    document.getElementById("dashboard-link").addEventListener("click", function () {
        showSection("dashboard-content", "Dashboard");
    });

    document.getElementById("create-ticket-link").addEventListener("click", function () {
        showSection("create-ticket-content", "Create Ticket");
    });

    document.getElementById("messages-link").addEventListener("click", function () {
        showSection("messages-content", "Messages");
    });

    document.getElementById("profile-link").addEventListener("click", function () {
        showSection("profile-content", "Profile");
    });

    function showSection(sectionId, title) {
        // Hide all content sections
        document.querySelectorAll(".content").forEach(section => section.style.display = "none");

        // Show selected section
        document.getElementById(sectionId).style.display = "block";
        document.getElementById("page-title").textContent = title;
    }

    // Message Sending Functionality
    document.getElementById("send-message").addEventListener("click", function () {
        let messageText = document.getElementById("chat-message").value.trim();

        if (messageText !== "") {
            let chatBox = document.querySelector(".chat-box");

            // Create Sent Message
            let messageDiv = document.createElement("div");
            messageDiv.classList.add("message", "sent");
            messageDiv.innerHTML = `<p>${messageText}</p> <span class="timestamp">${new Date().toLocaleTimeString()}</span>`;

            chatBox.appendChild(messageDiv);
            chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll

            document.getElementById("chat-message").value = "";
        }
    });

    // Profile Edit Functionality
    document.getElementById("edit-profile").addEventListener("click", function () {
        document.getElementById("edit-profile-form").style.display = "block";
    });

    document.getElementById("save-profile").addEventListener("click", function () {
        alert("Profile updated successfully!");
        document.getElementById("edit-profile-form").style.display = "none";
    });

    document.getElementById("cancel-profile").addEventListener("click", function () {
        document.getElementById("edit-profile-form").style.display = "none";
    });
});

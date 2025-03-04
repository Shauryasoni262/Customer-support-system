document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate a successful login for now
    // Replace this with your actual API call
    const fakeLoginResponse = { token: 'fake-token' };

    if (fakeLoginResponse.token) {
        localStorage.setItem('token', fakeLoginResponse.token);
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
        alert('Login failed. Please check your credentials.');
    }
});



document.getElementById('createTicketBtn').addEventListener('click', function() {
    window.location.href = '/create-ticket'; // Redirect to ticket creation page
});

// Fetch and display tickets
fetch('/api/tickets', {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
})
.then(response => response.json())
.then(tickets => {
    const ticketList = document.getElementById('ticketList');
    tickets.forEach(ticket => {
        const ticketElement = document.createElement('div');
        ticketElement.className = 'ticket';
        ticketElement.innerHTML = `
            <h3>${ticket.title}</h3>
            <p>${ticket.description}</p>
            <p><strong>Status:</strong> ${ticket.status}</p>
        `;
        ticketList.appendChild(ticketElement);
    });
});




document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    fetch('/api/tickets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ title, description })
    })
    .then(response => response.json())
    .then(data => {
        alert('Ticket created successfully!');
        window.location.href = '/dashboard'; // Redirect to dashboard
    })
    .catch(error => {
        console.error('Error:', error);
    });
});






// Register Form Submission
document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    // Simulate a successful registration for now
    // Replace this with your actual API call
    const fakeRegisterResponse = { success: true };

    if (fakeRegisterResponse.success) {
        alert('Registration successful! Please login.');
        window.location.href = 'index.html'; // Redirect to login page
    } else {
        alert('Registration failed. Please try again.');
    }
});






document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('active');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        if (user.role === 'company') {
            window.location.href = 'company.html';
        } else if (user.role === 'customer') {
            window.location.href = `customer.html?username=${username}`;
        }
    } else {
        document.getElementById('login-error').innerText = 'Invalid username or password';
    }
});

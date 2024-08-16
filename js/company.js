
const logoutButton = document.createElement('button');
logoutButton.innerText = "Log Out";
logoutButton.className = 'logout-button';
logoutButton.addEventListener('click', () => {
    alert('Logged out!');
    window.location.href = 'index.html';
});
document.body.appendChild(logoutButton);



document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const customerName = document.getElementById('customerName').value;
    const weight = parseFloat(document.getElementById('packageWeight').value);
    const value = parseFloat(document.getElementById('packageValue').value);

    const package = {
        id: Date.now(),
        customerName,
        weight,
        value,
        shippingMethod: getShippingMethod(weight),
        status: 'Packed'
    };

    if (value >= 1000) {
        const approval = confirm('High-value package! Needs finance approval. Approve?');
        if (!approval) return;
    }

    packages.push(package);
    displayPackages();
    this.reset();
});

function getShippingMethod(weight) {
    return weight > 10 ? 'Freight' : 'Standard';
}

function displayPackages() {
    const packageList = document.getElementById('package-list');
    packageList.innerHTML = '';

    packages.forEach(pkg => {
        const packageItem = document.createElement('div');
        packageItem.classList.add('package-item');
        packageItem.innerHTML = `
            <p><strong>${pkg.customerName}</strong> - ${pkg.status}</p>
            <p>Weight: ${pkg.weight}kg | Value: $${pkg.value} | Shipping: ${pkg.shippingMethod}</p>
            <button onclick="updateStatus(${pkg.id}, 'In Transit')">Mark as In Transit</button>
            <button onclick="updateStatus(${pkg.id}, 'Delivered')">Mark as Delivered</button>
            <button onclick="updateStatus(${pkg.id}, 'Lost', prompt('Enter reason:'))">Mark as Lost</button>
        `;
        packageList.appendChild(packageItem);
    });
}

function updateStatus(packageId, status, reason = '') {
    const pkg = packages.find(p => p.id === packageId);
    pkg.status = status;
    if (status === 'Lost') pkg.reason = reason;
    displayPackages();
}

displayPackages(); // Initial display

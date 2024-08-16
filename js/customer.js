const urlParams = new URLSearchParams(window.location.search);
const customerName = urlParams.get('username').toLowerCase();

// Logout Button
const logoutButton = document.createElement('button');
logoutButton.innerText = "Log Out";
logoutButton.className = 'logout-button';
logoutButton.addEventListener('click', () => {
    alert('Logged out!');
    window.location.href = 'index.html';
});
document.body.appendChild(logoutButton);

function displayCustomerPackages() {
    const customerPackageList = document.getElementById('customer-package-list');
    customerPackageList.innerHTML = '';

    const customerPackages = packages.filter(pkg => pkg.customerName.toLocaleLowerCase() === customerName);

    if (customerPackages.length === 0) {
        customerPackageList.innerHTML = '<p>No packages found.</p>';
        return;
    }

    customerPackages.forEach(pkg => {
        const packageItem = document.createElement('div');
        packageItem.classList.add('customer-package-item');

        let cancelButtonHtml = `<button onclick="cancelOrder(${pkg.id}, prompt('Enter reason for cancellation:'))">Cancel Order</button>`;
        if (pkg.status === 'Cancelled') {
            cancelButtonHtml = '';
        }

        packageItem.innerHTML = `
            <p><strong>Status:</strong> ${pkg.status}</p>
            <p><strong>Weight:</strong> ${pkg.weight}kg | <strong>Value:</strong> $${pkg.value} | <strong>Shipping:</strong> ${pkg.shippingMethod}</p>
            ${cancelButtonHtml}
        `;
        customerPackageList.appendChild(packageItem);
    });
}

function cancelOrder(packageId, reason) {
    const pkg = packages.find(p => p.id === packageId);
    if (!pkg) return;
    pkg.status = 'Cancelled';
    pkg.reason = reason;
    displayCustomerPackages();
}

displayCustomerPackages(); // Initial display

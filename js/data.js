// Shared data between company and customer sides
let packages = [
    {
        id: 1,
        customerName: 'Alice',
        weight: 5,
        value: 150,
        shippingMethod: 'Standard',
        status: 'In Transit'
    },
    {
        id: 2,
        customerName: 'Bob',
        weight: 12,
        value: 1200,
        shippingMethod: 'Freight',
        status: 'Packed'
    },
    {
        id: 3,
        customerName: 'Charlie',
        weight: 2,
        value: 75,
        shippingMethod: 'Standard',
        status: 'Delivered'
    }
];

const users = [
    { username: 'admin', password: 'admin123', role: 'company' },
    { username: 'alice', password: 'alice123', role: 'customer' },
    { username: 'bob', password: 'bob123', role: 'customer' },
    { username: 'charlie', password: 'charlie123', role: 'customer' }
];

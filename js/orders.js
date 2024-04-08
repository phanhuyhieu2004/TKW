const Orders = [
    {
        name: 'dgfg',
        sdt: '435546',
        address: 'fhg',
        action: 'add'
    }, {
        name: 'dgfg',
        sdt: '435546',
        address: 'fhg',
        action: 'add'
    }, {
        name: 'dgfg',
        sdt: '435546',
        address: 'fhg',
        action: 'add'
    }, {
        name: 'dgfg',
        sdt: '435546',
        address: 'fhg',
        action: 'add'
    }, {
        name: 'dgfg',
        sdt: '435546',
        address: 'fhg',
        action: 'add'
    }, {
        name: 'dgfg',
        sdt: '435546',
        address: 'fhg',
        action: 'add'
    },
];

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
            <td>${order.name}</td>
            <td>${order.sdt}</td>
            <td>${order.address}</td>
            <td>${order.action}</td>
            <td>${order.action}</td>
        `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggle = document.querySelector(".theme-toggle")
// const tbody = document.querySelector('.recent-orders tbody');
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggle.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggle.querySelector('span:nth-child(2)').classList.toggle('active');
})


// Orders.forEach(order => {
//     const tr = document.createElement('tr');
// const trContent= `
//         <td>${order.name}</td>
//         <td>${order.sdt}</td>
//         <td>${order.address}</td>
//         <td>${order.action}</td>
//         <td>${order.action}</td>
//     `;
// tr.innerHTML=trContent;
// document.querySelector('table tbody').appendChild(tr)
// });
const form = document.querySelector('.main__form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const table = document.getElementById("table");

var count = 1;

function handleSubmit(e){
    e.preventDefault();
    const email = emailInput.value;
    const pw = passwordInput.value;
    const entry = `
        <tr>
            <td>${count}</td>
            <td>${email}</td>
            <td>${pw}</td>
        </tr>
    `;
    table.innerHTML = table.innerHTML + entry;
    count += 1;
    form.reset()
}

form.addEventListener('submit', handleSubmit)
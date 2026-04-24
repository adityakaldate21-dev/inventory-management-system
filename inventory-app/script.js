let products = JSON.parse(localStorage.getItem("products")) || [];
let employees = JSON.parse(localStorage.getItem("employees")) || [];

function saveData() {
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("employees", JSON.stringify(employees));
}

function addProduct() {
    let name = document.getElementById("productName").value;
    let qty = parseInt(document.getElementById("productQty").value);
    let price = parseFloat(document.getElementById("productPrice").value);

    if (!name || !qty || !price) return alert("Enter all details");

    products.push({name, qty, price});
    saveData();
    displayProducts();
}

function displayProducts() {
    let list = document.getElementById("productList");
    let select = document.getElementById("billProduct");

    list.innerHTML = "";
    select.innerHTML = "";

    products.forEach((p, index) => {
        list.innerHTML += `<li>${p.name} - Qty: ${p.qty} - ₹${p.price}</li>`;
        select.innerHTML += `<option value="${index}">${p.name}</option>`;
    });
}

function calculateBill() {
    let index = document.getElementById("billProduct").value;
    let qty = parseInt(document.getElementById("billQty").value);

    if (!qty) return alert("Enter quantity");

    let product = products[index];
    let total = product.price * qty;

    product.qty -= qty;
    saveData();
    displayProducts();

    document.getElementById("billResult").innerText = `Total: ₹${total}`;
}

function addEmployee() {
    let name = document.getElementById("empName").value;
    let salary = document.getElementById("empSalary").value;

    if (!name || !salary) return alert("Enter details");

    employees.push({name, salary});
    saveData();
    displayEmployees();
}

function displayEmployees() {
    let list = document.getElementById("empList");
    list.innerHTML = "";

    employees.forEach(e => {
        list.innerHTML += `<li>${e.name} - ₹${e.salary}</li>`;
    });
}

// Load data on start
displayProducts();
displayEmployees();
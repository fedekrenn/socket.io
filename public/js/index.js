const socket = io();

const form = document.getElementById('product-form');
const productsContainer = document.getElementById('products-container');

form.addEventListener('submit',  (e) => {

    e.preventDefault();

    const data = {
        title: e.target.title.value,
        price: e.target.price.value,
        thumbnail: e.target.thumbnail.value
    }

    socket.emit('update', data);

    e.target.price.value = '';
    e.target.title.value = '';
    e.target.thumbnail.value = '';

});

socket.on('productos', (data) => {
    console.log(data);

    productsContainer.innerHTML = '';

    data.forEach(product => {
        productsContainer.innerHTML += `
            <tr>
                <td>${product.title}</td>
                <td>$ ${product.price}</td>
                <td><img src="${product.thumbnail}" alt="${product.title}" width="50px"></td>
            </tr>
        `;
    });
});
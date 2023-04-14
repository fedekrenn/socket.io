const socket = io();

const formProd = document.getElementById("product-form");
const formChat = document.getElementById("chat-form");
const addProductBtn = document.getElementById("addProductBtn");
const productsContainer = document.getElementById("products-container");

formProd.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    e.target.title.value === "" ||
    e.target.price.value === "" ||
    e.target.thumbnail.value === ""
  ) {
    return alert("Todos los campos son obligatorios");
  }

  const data = {
    title: e.target.title.value,
    price: e.target.price.value,
    thumbnail: e.target.thumbnail.value,
  };

  socket.emit("update", data);

  e.target.price.value = "";
  e.target.title.value = "";
  e.target.thumbnail.value = "";
});

formChat.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    e.target.chatUserName.value == "" ||
    e.target.chatTextMsg.value == "" ||
    e.target.chatColor.value == ""
  ) {
    return alert("Debe completar todos los campos");
  }

  const data = {
    email: e.target.chatUserName.value,
    message: e.target.chatTextMsg.value,
    color: e.target.chatColor.value,
  };

  socket.emit("new-message", data);

  e.target.chatTextMsg.value = "";

  e.target.chatUserName.disabled = true;
  e.target.chatColor.disabled = true;

  e.target.chatTextMsg.focus();
});

socket.on("productos", (data) => {
  productsContainer.innerHTML = "";

  if (data.error) {
    addProductBtn.disabled = true;
    addProductBtn.style.cursor = "not-allowed";
    addProductBtn.style.opacity = "0.5";
    return alert(data.error);
  }

  data.forEach((product) => {
    productsContainer.innerHTML += `
    <tr>
        <td>${product.title}</td>
        <td>$ ${product.price}</td>
        <td><img src="${product.thumbnail}" alt="${product.title}"></td>
    </tr>
`;
  });
});

socket.on("mensajes", (data) => {
  const chatContainer = document.getElementById("messages");

  chatContainer.innerHTML = "";

  if (data.length === 0) {
    chatContainer.style.display = "none";
  } else {
    chatContainer.style.display = "block";
  }

  data.sort((a, b) => b.id - a.id);

  data.forEach((message) => {
    chatContainer.innerHTML += `
    <div class="message-container">
        <p class="message-user" style="color: ${message.color}">${message.email}</p>
        <p class="message-text">${message.message}</p>
        <p class="message-date">${message.date}</p>
    </div>
`;
  });
});

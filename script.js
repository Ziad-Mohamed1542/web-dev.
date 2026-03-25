document.addEventListener("DOMContentLoaded", function () {
  let cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

  const subscribeForm = document.getElementById("subscribe-form");

  if (subscribeForm) {
    subscribeForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for subscribing.");
    });
  }

  const cartButtons = document.querySelectorAll(".add-to-cart");

  cartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const itemName = this.getAttribute("data-item");
      cartItems.push(itemName);
      sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
      alert("Item added: " + itemName);
    });
  });

  const viewCartBtn = document.getElementById("view-cart-btn");

  if (viewCartBtn) {
    viewCartBtn.addEventListener("click", function () {
      const modal = document.getElementById("cart-modal");
      const list = document.getElementById("cart-items");

      list.innerHTML = "";

      cartItems.forEach(function (item) {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
      });

      modal.style.display = "block";
    });
  }

  const closeBtn = document.getElementById("close-cart-modal");

  if (closeBtn) {
    closeBtn.onclick = function () {
      document.getElementById("cart-modal").style.display = "none";
    };
  }

  const clearCartBtn = document.getElementById("clear-cart-btn");

  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", function () {
      if (cartItems.length === 0) {
        alert("Cart is already cleared!");
        return;
      }
      cartItems = [];
      sessionStorage.removeItem("cartItems");
      document.getElementById("cart-items").innerHTML = "";
      alert("Cart cleared.");
    });
  }

  const processOrderBtn = document.getElementById("process-order-btn");

  if (processOrderBtn) {
    processOrderBtn.addEventListener("click", function () {
      if (cartItems.length > 0) {
        alert("Order processed!");
        cartItems = [];
        sessionStorage.removeItem("cartItems");
        document.getElementById("cart-items").innerHTML = "";
      } else {
        alert("Cart is empty.");
      }
    });
  }

  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const feedback = document.getElementById("order").value;
      const customOrder = document.getElementById("custom-order").checked;

      const customerInfo = {
        name,
        email,
        feedback,
        customOrder,
      };

      localStorage.setItem(name, JSON.stringify(customerInfo));

      alert("Thank you, " + name + "!");
    });
  }
});

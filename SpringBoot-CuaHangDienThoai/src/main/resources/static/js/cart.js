document.addEventListener("DOMContentLoaded", function () {
  let addToCartButtons = document.querySelectorAll(".plus");
  let minusToCartButtons = document.querySelectorAll(".minus");
  let deleteCartButtons = document.querySelectorAll(".remove-item");
  // console.log(deleteCartButtons);
  addToCartButtons.forEach((addToCartButton) => {
    addToCartButton.addEventListener("click", () => {
      // let id = element.getAttribute("id");
      let productId = addToCartButton.getAttribute("data-product-id");
      let quantityInput = document.getElementById("value" + productId);
      console.log(quantityInput);
      let xhr = new XMLHttpRequest();
      xhr.open("PUT", "/cart", true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      let csrfToken = document
        .querySelector('meta[name="_csrf"]')
        .getAttribute("content");
      let csrfHeader = document
        .querySelector('meta[name="_csrf_header"]')
        .getAttribute("content");
      xhr.setRequestHeader(csrfHeader, csrfToken);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // Xử lý thành công, có thể cập nhật giao diện người dùng
          let currentValue = parseInt(quantityInput.value);
          let newValue = currentValue + 1;
          quantityInput.value = newValue;
          console.log("thêm vào giỏ hàng thành công");
        }
      };
      xhr.send("productId=" + productId);
    });
  });
  minusToCartButtons.forEach((minusToCartButton) => {
    minusToCartButton.addEventListener("click", () => {
      // let id = element.getAttribute("id");
      console.log("clicked");
      let productId = minusToCartButton.getAttribute("data-product-id");
      console.log(productId);
      let quantityInput = document.getElementById("value" + productId);
      console.log(quantityInput);
      let xhr = new XMLHttpRequest();
      xhr.open("PUT", "/cart", true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      let csrfToken = document
        .querySelector('meta[name="_csrf"]')
        .getAttribute("content");
      let csrfHeader = document
        .querySelector('meta[name="_csrf_header"]')
        .getAttribute("content");
      xhr.setRequestHeader(csrfHeader, csrfToken);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // Xử lý thành công, có thể cập nhật giao diện người dùng
          let currentValue = parseInt(quantityInput.value);
          let newValue = currentValue - 1;
          quantityInput.value = newValue;
          console.log("Trừ khỏi giỏ hàng thành công");
        }
      };
      xhr.send("productId=" + productId);
    });
  });
  deleteCartButtons.forEach((deleteCartButton) => {
    deleteCartButton.addEventListener("click", () => {
      let cartId = deleteCartButton.closest(".block__product-item__outer").id;
      const parentElement = document.getElementById(cartId);
      let productId = cartId.replace("cart", "");
      console.log(productId);
      let xhr = new XMLHttpRequest();
      xhr.open("DELETE", "/cart", true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      let csrfToken = document
        .querySelector('meta[name="_csrf"]')
        .getAttribute("content");
      let csrfHeader = document
        .querySelector('meta[name="_csrf_header"]')
        .getAttribute("content");
      xhr.setRequestHeader(csrfHeader, csrfToken);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // Xử lý thành công, có thể cập nhật giao diện người dùng
          if (parentElement) {
            parentElement.remove();
          }
          console.log("Xoá giỏ hàng thành công");
        }
      };
      xhr.send("productId=" + productId);
    });
  });
});

// function increaseQuantity(productId) {
//     let xhr = new XMLHttpRequest();
//     xhr.open("PUT", "/cart/", true);
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     let csrfToken = document.querySelector('meta[name="_csrf"]').getAttribute('content');
//     let csrfHeader = document.querySelector('meta[name="_csrf_header"]').getAttribute('content');
//     xhr.setRequestHeader(csrfHeader, csrfToken);
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 // Xử lý thành công, có thể cập nhật giao diện người dùng
//                 let quantityInput = document.getElementById(productId);
//                 let currentValue = parseInt(quantityInput.value);
//                 let newValue = currentValue + 1;
//                 quantityInput.value = newValue;
//             } else {
//                 // Xử lý lỗi (nếu có)
//                 alert("Đã xảy ra lỗi khi tăng số lượng sản phẩm.");
//             }
//         }
//     };
//     let data = "productId=" + encodeURIComponent(productId);
//     xhr.send(data);
// }

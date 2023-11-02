document.addEventListener("DOMContentLoaded", function () {
  let addToCartButtons = document.querySelectorAll(".plus");
  let minusToCartButtons = document.querySelectorAll(".minus");
  let deleteCartButtons = document.querySelectorAll(".remove-item");
  const totalPrices = document.getElementById("total_prices");
  let devices = [];
  console.log(totalPrices);
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
          updataTotalPrice();
          console.log(devices);
          console.log("thêm vào giỏ hàng thành công");
        }
      };
      xhr.send("productId=" + productId + "&cal=plus");
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
          if (currentValue > 1) {
            let newValue = currentValue - 1;
            quantityInput.value = newValue;
          }
          updataTotalPrice();
          console.log("Trừ khỏi giỏ hàng thành công");
        }
      };
      xhr.send("productId=" + productId + "&cal=minus");
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
            updataTotalPrice();
            parentElement.remove();
          }
          console.log("Xoá giỏ hàng thành công");
        }
      };
      xhr.send("productId=" + productId);
    });
  });

  const checkBoxes = document.querySelectorAll(".custom-control-input");
  checkBoxes.forEach((checkBox) => {
    // console.log(checkBox);
    checkBox.addEventListener("click", () => {
      let isTrueSet = checkBox.value === "true";
      checkBox.value = (!isTrueSet).toString();
      // console.log(checkBox.value);
      updataTotalPrice();
    });
  });

  let buyBtn = document.querySelector(".btn-action");
  // console.log(buyBtn);
  buyBtn.addEventListener("click", () => {
    let productIds = [];
    addToCartButtons.forEach((addToCartButton) => {
      let checkbox = addToCartButton
        .closest(".block__product-item__outer")
        .querySelector(".custom-control-input");
      console.log(checkbox.value);
      if (checkbox.value === "true") {
        let productId = parseInt(
          addToCartButton.getAttribute("data-product-id"),
        );
        let quantityInput = parseInt(
          document.getElementById("value" + productId).value,
        );
        let updateData = { deviceId: productId, quantity: quantityInput };
        productIds.push(updateData);
      }
    });
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/payment-info", true); // Đặt đường dẫn POST

    // Đặt tiêu đề của yêu cầu, ví dụ: "Content-Type" là "application/json"
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    let csrfToken = document
      .querySelector('meta[name="_csrf"]')
      .getAttribute("content");
    let csrfHeader = document
      .querySelector('meta[name="_csrf_header"]')
      .getAttribute("content");
    xhr.setRequestHeader(csrfHeader, csrfToken);

    // Xử lý phản hồi từ máy chủ
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Xử lý phản hồi từ máy chủ nếu cần
        // Ví dụ: chuyển hướng đến trang khác sau khi mua hàng thành công
        window.location.href = "/payment-info";
      }
    };

    // Chuyển đổi dữ liệu cart_items thành JSON và gửi đi
    var jsonData = JSON.stringify(productIds);
    console.log("đây là json khi gửi: " + jsonData);
    xhr.send(jsonData);
    console.log(JSON.stringify(productIds));
  });

  const updataTotalPrice = () => {
    let totalPrice = 0;
    checkBoxes.forEach((checkBox) => {
      if (checkBox.value === "true") {
        let price = parseInt(
          checkBox
            .closest(".block__product-item__outer")
            .querySelector(".product__price--show").innerText,
          10,
        );
        // console.log(price);
        let quantity = parseInt(
          document.getElementById(
            "value" +
              checkBox
                .closest(".block__product-item__outer")
                .querySelector(".plus")
                .getAttribute("data-product-id"),
          ).value,
          10,
        );
        // console.log(price);
        // console.log(quantity);
        totalPrice += quantity * price;
        // console.log(totalPrice);
      }
    });
    totalPrices.innerText = totalPrice + "đ";
  };
});

function updateDeviceQuantity(data, updateData) {
  // Tìm kiếm xem "devices" đã tồn tại trong danh sách data hay chưa
  let deviceExists = false;
  for (let i = 0; i < data.length; i++) {
    if (data[i].devices === updateData.devices) {
      data[i].quantity = updateData.quantity;
      deviceExists = true;
      break;
    }
  }

  // Nếu "devices" không tồn tại, thêm mới nó vào danh sách data
  if (!deviceExists) {
    data.push(updateData);
  }
}

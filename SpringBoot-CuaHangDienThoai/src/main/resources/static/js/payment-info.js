let hanhChinh;
fetch("/data/data.json").then((res) => {
    return res.json().then((data) => {
        hanhChinh = data;
    });
});
// async function loadNames() {
//   const response = await fetch("/data/data.json");
//   const data = await response.json();
//   return data;
// }
// let hanhChinh = loadNames().then((res) => res);

function handleNormalPay() {

}

function handleVNPay(data) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/submitOrderVNPay", true); // Đặt đường dẫn POST

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
            window.location.href = xhr.response;
            console.log("gửi thành công thành công");
        }
    };
    xhr.send(JSON.stringify(data));
}
document.addEventListener("DOMContentLoaded", function () {
    // console.log(hanhChinh.Id);

    let productItems = document.querySelectorAll(".product-item");
    let buyBtn = document.querySelector(".submitorder");
    let nameInput = document.querySelector(".input-name");
    let phoneInput = document.querySelector(".input-phone");
    let city = document.getElementById("city");
    let district = document.getElementById("district");
    let ward = document.getElementById("ward");
    let address = document.querySelector(".address");
    const checkBoxes = document.querySelectorAll(".cartnew-choose-dot");
    checkBoxes.forEach((checkBox) => {
        checkBox.addEventListener("click", () => {
            if (checkBox.value === "false") {
                checkBoxes.forEach((otherCheckbox) => {
                    if (otherCheckbox !== "true") {
                        otherCheckbox.value = "false";
                    }
                });
                checkBox.value = "true";
            }
        });
    });
    // console.log(buyBtn);
    buyBtn.addEventListener("click", () => {
        let data = {};
        data.devices = [];
        // console.log(nameInput.value);
        if (nameInput.value.trim() === "") {
            alert("Nhập thiếu tên");
            return;
        }
        if (phoneInput.value.trim() === "") {
            alert("Nhập thiếu số điện thoại");
            return;
        }
        if (city.value.trim() === "") {
            alert("Nhập thiếu tỉnh");
            return;
        }
        if (district.value.trim() === "") {
            alert("Nhập thiếu thành phố");
            return;
        }
        if (ward.value.trim() === "") {
            alert("Nhập thiếu quận, huyện");
            return;
        }
        if (address.value.trim() === "") {
            alert("Nhập thiếu địa chỉ");
            return;
        }

        data.name = nameInput.value;
        data.phone = phoneInput.value;
        data.address =
            address.value +
            ", " +
            hanhChinh
                .find((x) => x.Id === city.value)
                .Districts.find((x) => x.Id === district.value)
                .Wards.find((x) => x.Id === ward.value).Name +
            ", " +
            hanhChinh
                .find((x) => x.Id === city.value)
                .Districts.find((x) => x.Id === district.value).Name +
            ", " +
            hanhChinh.find((x) => x.Id === city.value).Name;
        // console.log(hanhChinh[city.value].Name);
        let productIds = [];
        productItems.forEach((productItem) => {
            let productId = parseInt(productItem.id);
            let quantityInput = parseInt(document.querySelector(".number").value);
            let updateData = {deviceId: productId, quantity: quantityInput};
            data.devices.push(updateData);
            // console.log(productId);
            // console.log(quantityInput);
        });
        data.paymentMethod = -1
        checkBoxes.forEach((checkBox) => {
            if (checkBox.value === "true" && checkBox.id === "normal-payment" ) {
                data.paymentMethod = 0
            } else if (checkBox.value === "true" && checkBox.id === "qrcode") {
                data.paymentMethod = 1
            }
            else if (checkBox.value === "true" && checkBox.id === "momo") {
                data.paymentMethod = 3
            }
        });
        if (data.paymentMethod === -1) {
            alert("Vui lòng chọn phương thức thanh toán")
            return;
        }
        else if (data.paymentMethod === 3) {
            alert("Ví momo sẽ hỗ trợ trong thời gian tới, vui lòng chọn phương thức thanh toán khác")
            return;
        }

        if (data.paymentMethod === 0) {
            handleNormalPay()
        }
        else if (data.paymentMethod === 1) {
            handleVNPay(data)
        }


        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/submitOrder", true); // Đặt đường dẫn POST

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
                // window.location.href = "/payment-info";
                console.log("gửi thành công thành công");
            }
        };
        xhr.send(JSON.stringify(data));

        // Chuyển đổi dữ liệu cart_items thành JSON và gửi đi
        // console.log(JSON.stringify(data));

        // var jsonData = JSON.stringify(productIds);
        // console.log(jsonData);
        // xhr.send(jsonData);
        // console.log(JSON.stringify(productIds));
    });
});

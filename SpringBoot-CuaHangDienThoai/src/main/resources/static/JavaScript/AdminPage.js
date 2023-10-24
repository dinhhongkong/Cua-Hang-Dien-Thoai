function updateTable(data) {
    var tbody = document.querySelector('#device-table tbody');
    tbody.innerHTML = ''; // Xóa tất cả các hàng hiện có trong bảng
    for (var i = 0; i < data.content.length; i++) {
        let device = data.content[i];
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${device.id}</td>
            <td>${device.deviceName}</td>
            <td><img src="${device.picture}"></td>
            <td>${device.gia}</td>
            <td>${device.brand}</td>
            <td>
                <button class="btn btn-info">Infor</button>
                <button class="btn btn-danger">Stop</button>
            </td>
        `;
        tbody.appendChild(row);
    }
}
function pageDevice(numberPage){
    let xhr = new XMLHttpRequest();
    let csrfToken = document.querySelector('meta[name="_csrf"]').getAttribute('content');
    let csrfHeader = document.querySelector('meta[name="_csrf_header"]').getAttribute('content');
    url = '/devices_page?page=' + numberPage
    console.log(url)
    xhr.open('GET', url, true);
    xhr.setRequestHeader(csrfHeader,csrfToken);
    xhr.send()
    console.log("gửi yêu cầu")
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Nếu dữ liệu được tải thành công, bạn có thể sử dụng JSON.parse() nếu dữ liệu trả về là JSON
            let listDevice = JSON.parse(xhr.responseText);
            console.log(listDevice)
            updateTable(listDevice);
            var divElement = document.createElement('div');
            divElement.className = 'page';

            var ulElement = document.createElement('ul');
            ulElement.className = 'pagination';

            // Thêm nút Previous (<<)
            var liElement = document.createElement('li');
            if (listDevice.number === 0) {
                liElement.className = 'disabled';
            }
            var aElement = document.createElement('a');
            aElement.href = '/admin?page=' + (listDevice.number - 1);
            aElement.textContent = '<<';
            liElement.appendChild(aElement);
            ulElement.appendChild(liElement);

            // Thêm các nút trang
            for (var i = listDevice.number - 1; i <= listDevice.number + 2; i++) {
                if (i >= 0 && i < listDevice.totalPages) {
                    var liElement = document.createElement('li');
                    var aElement = document.createElement('a');
                    aElement.textContent = i + 1;
                    aElement.addEventListener("click", ()=>{
                        console.log("ádsa")
                        console.log(i)
                        pageDevice(i)
                    })
                    if((i) === listDevice.number){
                        aElement.className = 'active-page'
                    }
                    liElement.appendChild(aElement);
                    ulElement.appendChild(liElement);
                }
            }

            // Thêm dấu '...'
            if (listDevice.number < listDevice.totalPages - 3) {
                var liElement = document.createElement('li');
                var spanElement = document.createElement('span');
                spanElement.textContent = '...';
                liElement.appendChild(spanElement);
                ulElement.appendChild(liElement);
            }
            var liElement = document.createElement('li');
            var aElement = document.createElement('a');
            aElement.href = '/admin?page=' + (listDevice.totalPages - 1);
            aElement.textContent = listDevice.totalPages - 1;
            liElement.appendChild(aElement);
            ulElement.appendChild(liElement);
            // Thêm nút Last (>>)
            var liElement = document.createElement('li');
            if (listDevice.number === listDevice.totalPages - 1) {
                liElement.className = 'disabled';
            }
            var aElement = document.createElement('a');
            aElement.href = '/admin?page=' + (listDevice.totalPages - 1);
            aElement.textContent = ">>";
            liElement.appendChild(aElement);
            ulElement.appendChild(liElement);
            let page = document.querySelector("#device")
            page.appendChild(ulElement)
        } else {
            console.error('Lỗi khi tải dữ liệu từ "Admin/devices":', xhr.status, xhr.statusText);
        }
    };
}

const TITLE = document.querySelector("header").innerText;
if(TITLE == "QUẢN LÝ ĐƠN HÀNG"){
    let page = document.querySelector("#order")
    page.style.display = "block"
}
else if(TITLE == "QUẢN LÝ SẢN PHẨM"){
    let page = document.querySelector("#device")
    page.style.display = "block"
    pageDevice(0)
}
else if(TITLE == "ADMIN"){
    let page = document.querySelector("#admin-acc")
    page.style.display = "block"
}

/* Don Hang */
let btn_approve_order = document.querySelectorAll(".approve-order")
btn_approve_order.forEach(function (btn){
    btn.addEventListener("click", () => {
        const donHangId = btn.getAttribute("data-id")
        const xhr = new XMLHttpRequest()
        xhr.open("POST", "/Admin/duyet", true)
        xhr.setRequestHeader("content-Type", "application/x-www-form-urlencoded")
        let csrfToken = document.querySelector('meta[name="_csrf"]').getAttribute('content');
        let csrfHeader = document.querySelector('meta[name="_csrf_header"]').getAttribute('content');
        xhr.setRequestHeader(csrfHeader,csrfToken);
        xhr.send("donHangId=" + encodeURIComponent(donHangId));
        xhr.onreadystatechange = function (){
            if(xhr.readyState === 4 && xhr.status === 200){
                console.log('Đã duyệt đơn hàng thành công')
                location.reload()
            }
        }
    })
})

function cancelOrder(idDonHang){
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/Admin/huy", true)
    xhr.setRequestHeader("content-Type", "application/x-www-form-urlencoded")
    let csrfToken = document.querySelector('meta[name="_csrf"]').getAttribute('content');
    let csrfHeader = document.querySelector('meta[name="_csrf_header"]').getAttribute('content');
    xhr.setRequestHeader(csrfHeader,csrfToken);
    xhr.send("donHangId=" + encodeURIComponent(idDonHang));
    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log('Đã Hủy đơn hàng thành công')
            location.reload()
        }
    }
}

function adminBan(userName){
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/Admin/ban", true)
    xhr.setRequestHeader("content-Type", "application/x-www-form-urlencoded")
    let csrfToken = document.querySelector('meta[name="_csrf"]').getAttribute('content');
    let csrfHeader = document.querySelector('meta[name="_csrf_header"]').getAttribute('content');
    xhr.setRequestHeader(csrfHeader,csrfToken);
    xhr.send("userName=" + encodeURIComponent(userName));
    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log('Đã chặn tài khoản thành công')
            location.reload()
        }
    }
}

function adminUnlock(userName){
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/Admin/unlock", true)
    xhr.setRequestHeader("content-Type", "application/x-www-form-urlencoded")
    let csrfToken = document.querySelector('meta[name="_csrf"]').getAttribute('content');
    let csrfHeader = document.querySelector('meta[name="_csrf_header"]').getAttribute('content');
    xhr.setRequestHeader(csrfHeader,csrfToken);
    xhr.send("userName=" + encodeURIComponent(userName));
    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log('Mở tài khoản thành công')
            location.reload()
        }
    }
}



let clickableLiElements = document.querySelectorAll(".clickable-li")

console.log(clickableLiElements)

clickableLiElements.forEach(function (liElement){
    liElement.addEventListener("click", function (){
        let anchorElement = liElement.querySelector("a");
        let href = anchorElement.getAttribute("href");
        window.location.href = href;
    });
});

/* Modal */

// Hiển thị modal
let modalInforBtns = document.querySelectorAll("button[data-toggle='modal']");

modalInforBtns.forEach((btn) => {
    btn.addEventListener("click",() => {
        let modal = document.querySelector(btn.getAttribute("data-target").toString())
        modal.style.display = "flex";
        if(btn.getAttribute("data-target").toString() == "#ModalYesNo" && (TITLE == "QUẢN LÝ ĐƠN HÀNG")){
            titleModal = modal.querySelector("h2")
            titleModal.innerText = "Bạn có muốn hủy đơn hàng này không"
            btnYes = modal.querySelector(".btn-primary")
            btnYes.setAttribute("data-id",btn.getAttribute("data-id"))
            btnYes.setAttribute("data-func","orderCancel")
        }
        else if(btn.getAttribute("data-target").toString() == "#ModalCreateAdmin" && (TITLE == "ADMIN")){
            titleModal = modal.querySelector("h2")
            titleModal.innerText = "Tạo tài khoản admin"
        }
        else if(btn.getAttribute("data-target").toString() == "#ModalYesNo" && (TITLE == "ADMIN") && btn.getAttribute("btn-use") =="lock"){
            titleModal = modal.querySelector("h2")
            titleModal.innerText = "Khóa tài khoản có username : "+ btn.getAttribute("data-id").toString() + "?";
            btnYes = modal.querySelector(".btn-primary")
            btnYes.setAttribute("data-id",btn.getAttribute("data-id"))
            btnYes.setAttribute("data-func","adminBan")
        }
        else if(btn.getAttribute("data-target").toString() == "#ModalYesNo" && (TITLE == "ADMIN") && btn.getAttribute("btn-use") =="unlock"){
            titleModal = modal.querySelector("h2")
            titleModal.innerText = "Mở tài khoản có username : "+ btn.getAttribute("data-id").toString() + "?";
            btnYes = modal.querySelector(".btn-primary")
            btnYes.setAttribute("data-id",btn.getAttribute("data-id"))
            btnYes.setAttribute("data-func","adminUnLock")
        }
        else if(btn.getAttribute("data-target").toString() == "#ModalDoiMK" && (TITLE == "ADMIN") && btn.getAttribute("btn-use") == "changePass"){
            titleModal = modal.querySelector("h2")
            titleModal.innerText = "Đổi mật khẩu username : "+ btn.getAttribute("data-id").toString();
            btnChangPass = modal.querySelector("button")
            btnChangPass.setAttribute("username", btn.getAttribute("data-id"))
        }
        else if(btn.getAttribute("data-target").toString() == "#ModalAddDT" && (TITLE == "QUẢN LÝ SẢN PHẨM")){
            titleModal = modal.querySelector("h2")
            titleModal.innerText = "Thêm sản phẩm"
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "/brand", true)
            xhr.setRequestHeader("content-Type", "application/json")
            let csrfToken = document.querySelector('meta[name="_csrf"]').getAttribute('content');
            let csrfHeader = document.querySelector('meta[name="_csrf_header"]').getAttribute('content');
            xhr.setRequestHeader(csrfHeader,csrfToken);
            xhr.send();
            xhr.onreadystatechange = function (){
                if(xhr.readyState === 4 && xhr.status === 200){
                    const responseEntity = JSON.parse(xhr.responseText)
                    const brandId = document.querySelector("#brand_id")
                    for (let brand of responseEntity){
                        option = document.createElement("option")
                        option.value = brand.id;
                        option.innerText = brand.brandName;
                        brandId.appendChild(option)
                    }
                }
            }
        }
    })
})
/* xư lý riêng phần đổi mật khẩu  */

let modelChangePass = document.querySelector("#ModalDoiMK")
let btnChangPass = modelChangePass.querySelector("button")
btnChangPass.addEventListener("click", () =>{
    let pass =modelChangePass.querySelector("input").value
    let userName = btnChangPass.getAttribute("username")
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/Admin/changpass", true)
    xhr.setRequestHeader("content-Type", "application/x-www-form-urlencoded")
    let csrfToken = document.querySelector('meta[name="_csrf"]').getAttribute('content');
    let csrfHeader = document.querySelector('meta[name="_csrf_header"]').getAttribute('content');
    xhr.setRequestHeader(csrfHeader,csrfToken);
    xhr.send("userName=" + encodeURIComponent(userName)+"&pass=" + encodeURIComponent(pass));
    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log('Đổi mật khẩu thành công')
            location.reload()
        }
    }
})


let btnYes = document.querySelectorAll(".btnYes")
console.log(btnYes)
btnYes.forEach((btn) =>{
    btn.addEventListener("click",()=>{
        let func = btn.getAttribute("data-func")
        if(func == "orderCancel"){
            let idDonHang = btn.getAttribute("data-id")
            cancelOrder(idDonHang)
        }
        else if(func == "adminBan"){
            let userName = btn.getAttribute("data-id")
            adminBan(userName)
        }
        else if(func == "adminUnLock"){
            let userName = btn.getAttribute("data-id")
            adminUnlock(userName)
        }
    })
})
let clsBtns = document.querySelectorAll(".close")
clsBtns.forEach((clsBtn) =>{
    clsBtn.addEventListener("click",()=>{
        let modals = document.querySelectorAll(".modal");
        modals.forEach((modal)=>{
            if (modal.style.display  === "flex"){
                modal.style.display = "none"
            }
        })
    })
})

/* thanh tìm kiếm đơn hàng */
let btnSearch = document.querySelector(".search-button");

btnSearch.addEventListener("click", () => {
    let inputSearch = document.querySelector(".search-input");
    console.log(inputSearch)
    console.log(inputSearch.value)
    const donHangId = inputSearch.value
    const xhr = new XMLHttpRequest()
    xhr.open("POST", "/Admin/donhang", true)
    xhr.setRequestHeader("content-Type", "application/x-www-form-urlencoded")
    let csrfToken = document.querySelector('meta[name="_csrf"]').getAttribute('content');
    let csrfHeader = document.querySelector('meta[name="_csrf_header"]').getAttribute('content');
    xhr.setRequestHeader(csrfHeader,csrfToken);
    xhr.send("donHangId=" + encodeURIComponent(donHangId));
    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4 && xhr.status === 200){
            const responseEntity = JSON.parse(xhr.responseText)
            const table = document.querySelector("#order-table");
            // Xóa tất cả các hàng dữ liệu hiện có
            table.querySelectorAll("tr").forEach((tr) => {
                tr.remove();
            });
            let tr = document.createElement("tr")
            for (const key of ["ID đơn hàng", "Tên người mua", "Ngày lập", "Trạng thái", "Action"]) {
                const th = document.createElement("th");
                th.textContent = key;
                tr.appendChild(th);
            }
            table.querySelector("thead").appendChild(tr)
            // Tạo các hàng dữ liệu mới
            const listDonHang = [responseEntity];
            for (const donHang of listDonHang) {
                tr = document.createElement("tr");
                // Thêm dữ liệu vào các thẻ `td`
                let  td = document.createElement("td");
                td.textContent = responseEntity.id
                tr.appendChild(td);
                td = document.createElement("td");
                td.textContent = responseEntity.user.userName
                tr.appendChild(td);
                td = document.createElement("td");
                const date = new Date(responseEntity.ngayLap)

                const day = date.getDate();
                const month = date.getMonth() + 1; // Tháng bắt đầu từ 0
                const year = date.getFullYear();
                const formattedDate = `${day}-${month}-${year}`;
                td.textContent = formattedDate
                tr.appendChild(td);
                td = document.createElement("td");
                td.textContent = responseEntity.trangThai
                tr.appendChild(td);

                // Thêm nút bấm vào thẻ `td`
                const tdAction = document.createElement("td");
                const divAction = document.createElement("div");
                const buttond = document.createElement("button");
                buttond.textContent = "Duyệt";
                buttond.classList.add("btn", "btn-primary");
                buttond.setAttribute("data-id", responseEntity.id);
                divAction.appendChild(buttond);
                const buttonh = document.createElement("button");
                buttonh.textContent = "Hủy";
                buttonh.classList.add("btn", "btn-danger");
                buttonh.setAttribute("data-toggle", "modal");
                buttonh.setAttribute("data-target", "#ModalYesNo");
                buttonh.setAttribute("data-id", responseEntity.id);
                divAction.appendChild(buttonh);
                tdAction.appendChild(divAction);
                tr.appendChild(tdAction);
                table.querySelector("tbody").appendChild(tr);
            }

            // Hiển thị lại bảng HTML
            let order_table = document.querySelector("#order-table")
            order_table.appendChild(table);
        }
    }
})

/* Tạo admin */
async function creatrAdmin(){
    let userName = document.querySelector("input[name = 'username']").value;
    let password = document.querySelector("input[name = 'password']").value;
    let email = document.querySelector("input[name = 'email']").value;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/Admin/create", true)
    xhr.setRequestHeader("content-Type", "application/json")
    let csrfToken = document.querySelector('meta[name="_csrf"]').getAttribute('content');
    let csrfHeader = document.querySelector('meta[name="_csrf_header"]').getAttribute('content');
    const data = {
        "userName": userName,
        "password": password,
        "role": "admin",
        "enable": "true",
        "email": email
    };
    xhr.setRequestHeader(csrfHeader,csrfToken);
    console.log(JSON.stringify(data))
    xhr.send(JSON.stringify(data));
    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log('Tạo tài khoản thành công')
            location.reload()
        }
    }

}

function addDevices(){
    let brand_id = document.querySelector("#brand_id");
    let selectedOption = brand_id.options[brand_id.selectedIndex];
    let selectedValue = selectedOption.value;
    let device_name = document.querySelector("input[name = 'device_name']").value;
    let released_at = document.querySelector("input[name = 'released_at']").value;
    let body = document.querySelector("input[name = 'body']").value;
    let file = document.querySelector("input[name = 'picture']").files[0];
    let os = document.querySelector("input[name = 'os']").value;
    let storage = document.querySelector("input[name = 'storage']").value;
    let display_size = document.querySelector("input[name = 'display_size']").value;
    let display_resolution = document.querySelector("input[name = 'display_resolution']").value;
    let camera_pixels = document.querySelector("input[name = 'camera_pixels']").value;
    let video_pixels = document.querySelector("input[name = 'video_pixels']").value;
    let ram = document.querySelector("input[name = 'ram']").value;
    let chipset = document.querySelector("input[name = 'chipset']").value;
    let battery_size = document.querySelector("input[name = 'battery_size']").value;
    let battery_type = document.querySelector("input[name = 'battery_type']").value;
    let specifications = document.querySelector("input[name = 'specifications']").value;
    let gia = document.querySelector("input[name = 'gia']").value;
    const xhr = new XMLHttpRequest();
    let formData =   new FormData();
    xhr.open("POST", "/Admin/addDevices", true)
    let csrfToken = document.querySelector('meta[name="_csrf"]').getAttribute('content');
    let csrfHeader = document.querySelector('meta[name="_csrf_header"]').getAttribute('content');
    formData.append("brandId", parseInt(selectedValue, 10));
    formData.append("deviceName", device_name);
    formData.append("releasedAt", released_at);
    formData.append("body", body);
    formData.append("file", file);
    formData.append("os", os);
    formData.append("storage", storage);
    formData.append("displaySize", display_size);
    formData.append("displayResolution", display_resolution);
    formData.append("cameraPixels", camera_pixels);
    formData.append("videoPixels", video_pixels);
    formData.append("ram", ram);
    formData.append("chipset", chipset);
    formData.append("batterySize", battery_size);
    formData.append("batteryType", battery_type);
    formData.append("specifications", specifications);
    formData.append("gia", gia);
    xhr.setRequestHeader(csrfHeader,csrfToken);
    console.log(device_name)
    console.log(file)
    console.log(specifications)
    var formDataEntries = formData.entries();
    for (var pair of formDataEntries) {
        console.log(pair[0] + ': ' + pair[1]);
    }
    xhr.send(formData);
    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log('tạo sản phẩm thành công')
            location.reload()
        }
    }
}


btnSubmit = document.querySelectorAll("button[type='submit']")
btnSubmit.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        name = btn.getAttribute("name")
        if(name == "createAdmin"){
            creatrAdmin();
        }
        else if (name == "addDevices"){
            addDevices()
        }
    })
})


/* Chọn ảnh trong thêm điện thoại*/

document.querySelector("input[name='picture']").addEventListener("change", function(){
    let file = this.files[0];
    let url = URL.createObjectURL(file)
    img = document.querySelector("#img-modal-add img")
    img.src = url
})
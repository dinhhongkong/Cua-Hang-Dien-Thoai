
const TITLE = document.querySelector("header").innerText;
if(TITLE == "QUẢN LÝ ĐƠN HÀNG"){
    let page = document.querySelector("#order")
    page.style.display = "block"
}
else if(TITLE == "QUẢN LÝ SẢN PHẨM"){
    let page = document.querySelector("#device")
    page.style.display = "block"
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
    const requestParams = [
        {
            key: "userName",
            value: userName
        },
        {
            key: "pass",
            value: pass
        }
    ];
    console.log(requestParams)
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

document.querySelector("button[type='submit']").addEventListener("click",creatrAdmin)
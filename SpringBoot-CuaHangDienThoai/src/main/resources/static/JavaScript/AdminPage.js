
const TITLE = document.querySelector("header").innerText;
if(TITLE == "QUẢN LÝ ĐƠN HÀNG"){
    let page = document.querySelector("#order")
    page.style.display = "block"
}

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
        console.log(xhr.readyState)
        xhr.onreadystatechange = function (){
            if(xhr.readyState === 4 && xhr.status === 200){
                console.log('Đã duyệt đơn hàng thành công')
                location.reload()
            }
        }
    })
})

function cancel_order(idDonHang){
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
    })
})

let btnYes = document.querySelectorAll(".btnYes")
console.log(btnYes)
btnYes.forEach((btn) =>{
    btn.addEventListener("click",()=>{
        let func = btn.getAttribute("data-func")
        if(func == "orderCancel"){
            let idDonHang = btn.getAttribute("data-id")
            cancel_order(idDonHang)
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
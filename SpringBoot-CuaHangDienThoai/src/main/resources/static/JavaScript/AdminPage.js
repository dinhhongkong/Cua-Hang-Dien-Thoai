
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
        xhr.setRequestHeader("content-Type", "appication/x-www-form-urlencoded")
        let csrfToken = document.querySelector('meta[name="_csrf"]').getAttribute('content');
        let csrfHeader = document.querySelector('meta[name="_csrf_header"]').getAttribute('content');
        xhr.setRequestHeader(csrfHeader,csrfToken);
        console.log("Đã duyệt đơn hàng thành công")
        console.log(xhr.readyState)
        xhr.send("donHangId=" + donHangId)
        console.log(xhr.readyState)
        xhr.onreadystatechange = function (){
            if(xhr.readyState === 4 && xhr.status === 200){
                console.log('Đã duyệt đơn hàng thành công')
            }
        }
    })
})

let clickableLiElements = document.querySelectorAll(".clickable-li")

console.log(clickableLiElements)

clickableLiElements.forEach(function (liElement){
    liElement.addEventListener("click", function (){
        let anchorElement = liElement.querySelector("a");
        let href = anchorElement.getAttribute("href");
        window.location.href = href;
    });
});
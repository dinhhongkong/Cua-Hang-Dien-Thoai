$(document).ready(() => {
  $(".chat-btn").click(() => {
    $(".chat-bot").slideToggle("slow");
  });
});

const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatBox = document.querySelector(".chat-box");

const createLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "outcoming"
      ? `<p>${message}</p>`
      : `<span class = "material-symbols-outlined"> smart_toy </span>
    <p>${message}</p>`;
  chatLi.innerHTML = chatContent;
  return chatLi;
};
const handleChat = () => {
  let userMessage = chatInput.value.trim();
  if (!userMessage) return;
  chatBox.appendChild(createLi(userMessage, "outcoming"));
  // chatBox.appendChild(createLi("hello", "incoming"));
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/chat-bot", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  var csrfToken = document.querySelector('meta[name="_csrf"]').getAttribute('content');
  var csrfHeader = document.querySelector('meta[name="_csrf_header"]').getAttribute('content');
  xhr.setRequestHeader(csrfHeader, csrfToken);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var jsonString = xhr.responseText
        var jsonObject = JSON.parse(jsonString);
        var responseValue = jsonObject.response;
        chatBox.appendChild(createLi(responseValue, "incoming"));
      } else {
        console.log('trang thái: ' + xhr.status)
      }
    }

  };
  xhr.send("chatContent=" + userMessage);
  chatInput.value = "";
  console.log(userMessage);
};
sendChatBtn.addEventListener("click", handleChat);

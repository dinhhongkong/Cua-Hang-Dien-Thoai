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
  chatBox.appendChild(createLi(userMessage, "incoming"));
  chatInput.value = "";
  console.log(userMessage);
};
sendChatBtn.addEventListener("click", handleChat);

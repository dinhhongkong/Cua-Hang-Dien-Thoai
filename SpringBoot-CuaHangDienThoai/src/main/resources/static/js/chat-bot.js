$(document).ready(() => {
  $(".chat-btn").click(() => {
    $(".chat-bot").slideToggle("slow");
  });
});

const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
console.log(chatInput, sendChatBtn);
const handleChat = () => {
  let userMessage = chatInput.value.trim();
  console.log(userMessage);
};
sendChatBtn.addEventListener("click", handleChat);

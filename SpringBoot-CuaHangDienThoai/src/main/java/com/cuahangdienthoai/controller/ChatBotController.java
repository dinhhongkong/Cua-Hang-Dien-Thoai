package com.cuahangdienthoai.controller;

import com.cuahangdienthoai.service.impl.ChatBotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChatBotController {
    private ChatBotService chatBotService;

    @Autowired
    public void setChatBotService(ChatBotService chatBotService) {
        this.chatBotService = chatBotService;
    }

    @GetMapping("/chat-bot")
    public String handlePostRequest() {
        String a = chatBotService.getResponseChat();
        System.out.println(a);
        return a;
    }





}
